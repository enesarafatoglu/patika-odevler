import axios from "axios";

const getData = async (userId) => {
    try {
        const userResponse = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postResponse = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const userData = userResponse.data;
        const userPosts = postResponse.data;

        const mergedData = {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            email: userData.email,
            address: userData.address,
            phone: userData.phone,
            website: userData.website,
            company: userData.company,
            posts: userPosts
        };

        return mergedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default getData;
