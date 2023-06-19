import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
 
  const db = await openDB('jate', 1);  // Create a connection to the 'jate' database with version 1

  const tx = db.transaction('jate', 'readwrite');   // Create a new transaction and specify the database and data privileges. with read-write access

  const store = tx.objectStore('jate');   // Open the desired object store

  const request = store.put({ id: 1, value: content });   // Create a put request to update an object in the database

  try {
    // Wait for the put operation to complete
    await request;
    console.info('Data saved to the database');
  } catch (error) {
    console.error('Error saving data to the database:', error);
  }
};


// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1); // Create a connection to the 'jate' database with version 1

    const tx = db.transaction('jate', 'readonly');// Create a new transaction with read-only access

    const store = tx.objectStore('jate');// Open the object store

    const request = store.getAll(); // Retrieve all data from the object store

    let response = await request; // Wait for the getAll operation to complete and obtain the response

    response = response.map((entry) => entry.value); // Extract the 'value' property from each object in the response

    console.info('Getting all data from the database');
    return response;
  } catch (error) {
    console.error('Error occurred while retrieving data from the database:', error);
    throw error;
  }
};

initdb();
