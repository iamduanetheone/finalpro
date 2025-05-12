// Test script to verify Sanity API connectivity
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

// Create a client with explicit configuration
const sanityClient = createClient({
  projectId: 'v20paafs',
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN // Will be undefined in this test
});

// Simple test to query the API
async function testSanityConnection() {
  console.log('Testing Sanity API connectivity...');
  console.log('Using configuration:');
  console.log('- Project ID:', 'v20paafs');
  console.log('- Dataset:', 'production');
  console.log('- API Version:', '2021-06-07');
  
  try {
    // Try to fetch documents
    const query = `*[_type == "settings"][0]`;
    const result = await sanityClient.fetch(query).catch(err => {
      console.log('Error fetching data:', err.message);
      return null;
    });
    
    if (result) {
      console.log('✅ Successfully connected to Sanity API');
      console.log('Result:', JSON.stringify(result, null, 2));
    } else {
      console.log('❌ Could not fetch data from Sanity');
    }
    
    // Try to get current user
    try {
      const user = await sanityClient.request({
        uri: '/users/me',
        withCredentials: true
      });
      console.log('✅ Successfully authenticated with Sanity');
      console.log('User:', user);
    } catch (error) {
      console.log('❌ Authentication failed:', error.message);
      console.log('You may need to create an API token at https://www.sanity.io/manage/project/v20paafs');
    }
  } catch (error) {
    console.error('❌ Error connecting to Sanity:', error.message);
  }
}

testSanityConnection(); 