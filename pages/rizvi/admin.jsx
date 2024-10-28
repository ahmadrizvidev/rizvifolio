import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { db, storage } from '../../firebaseConfig';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('addproject');
  const [user, setUser] = useState(null);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [projectURL, setProjectURL] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState(''); // New state for additional input
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        router.push('/rizvi/login');
      }
    });

    fetchProjects();

    return () => unsubscribe();
  }, [router]);

  const fetchProjects = async () => {
    try {
      const projectsQuery = query(collection(db, 'projects'));
      const projectsSnapshot = await getDocs(projectsQuery);
      const projectsList = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsList);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const handleImageUpload = (e) => setProjectImage(e.target.files[0]);
  const handleProjectURLChange = (e) => setProjectURL(e.target.value);
  const handleProjectTitleChange = (e) => setProjectTitle(e.target.value);
  const handleProjectTypeChange = (e) => setProjectType(e.target.value);
  const handleProjectDescriptionChange = (e) => setProjectDescription(e.target.value);
  const handleAdditionalInfoChange = (e) => setAdditionalInfo(e.target.value); // Handle additional input change

  const handleAddProject = async (e) => {
    e.preventDefault();

    if (!projectImage || !projectURL || !projectTitle || !projectType || !projectDescription || !additionalInfo) {
      alert('Please fill out all fields for the project.');
      return;
    }

    setIsUploading(true);

    const storageRef = ref(storage, `projects/${projectImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, projectImage);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading image:', error);
        setIsUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, 'projects'), {
            title: projectTitle,
            imageUrl: downloadURL,
            projectUrl: projectURL,
            projectType: projectType,
            projectDescription: projectDescription,
            additionalInfo: additionalInfo, // Save additional info
            createdAt: serverTimestamp(),
          });
          alert('Project added successfully!');
          setProjectTitle('');
          setProjectURL('');
          setProjectType('');
          setProjectDescription('');
          setAdditionalInfo(''); // Clear additional input
          setProjectImage(null);
          fetchProjects();
        } catch (error) {
          console.error('Error adding project:', error);
        } finally {
          setIsUploading(false);
        }
      }
    );
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteDoc(doc(db, 'projects', projectId));
      alert('Project deleted successfully!');
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push('/rizvi/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {user ? (
        <>
          <button onClick={toggleMenu} className="p-4 text-black md:hidden">Menu</button>
          <nav className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:relative md:opacity-100 md:pointer-events-auto`}>
            <div className="bg-white w-64 h-full shadow-md transform transition-transform duration-300">
              <button onClick={toggleMenu} className="p-4 text-gray-600 md:hidden">Close</button>
              <ul className="flex flex-col p-4 text-black">
                <li className="my-2"><button onClick={() => handleSectionChange('addproject')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Add Project</button></li>
                <li className="my-2"><button onClick={() => handleSectionChange('viewprojects')} className="block w-full text-left px-4 py-2 hover:bg-gray-200">View Projects</button></li>
                <li className="my-2"><button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button></li>
              </ul>
            </div>
          </nav>

          <main className="flex-grow p-6 text-white">
            {activeSection === 'addproject' && (
              <div>
                <h2 className="text-xl font-bold">Add New Project</h2>
                <form onSubmit={handleAddProject} className="flex flex-col space-y-4">
                  <input type="text" value={projectTitle} onChange={handleProjectTitleChange} placeholder="Project Title" className="border p-2 text-black" required />
                  <input type="text" value={projectURL} onChange={handleProjectURLChange} placeholder="Project URL" className="border p-2 text-black" required />
                  <input type="text" value={projectType} onChange={handleProjectTypeChange} placeholder="Project Type" className="border p-2 text-black" required />
                  <textarea value={projectDescription} onChange={handleProjectDescriptionChange} placeholder="Project Description" className="border p-2 text-black" required />
                  <input type="text" value={additionalInfo} onChange={handleAdditionalInfoChange} placeholder="Additional Information" className="border p-2 text-black" required /> {/* New additional input */}
                  <input type="file" onChange={handleImageUpload} required />
                  <button type="submit" className="bg-blue-500 text-white p-2">{isUploading ? `Uploading ${uploadProgress}%` : 'Add Project'}</button>
                </form>
              </div>
            )}

            {activeSection === 'viewprojects' && (
              <div>
                <h2 className="text-xl font-bold">View Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 shadow-md">
                      <h3 className="font-semibold">{project.title}</h3>
                      <img src={project.imageUrl} alt={project.title} className="h-32 w-full object-cover my-2" />
                      <p>Type: {project.projectType}</p>
                      <p>Description: {project.projectDescription}</p>
                      <p>Additional Info: {project.additionalInfo}</p> {/* Display additional info */}
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{project.projectUrl}</a>
                      <button onClick={() => handleDeleteProject(project.id)} className="text-red-500 mt-2">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminPage;
