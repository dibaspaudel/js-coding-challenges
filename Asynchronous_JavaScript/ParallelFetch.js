
export default async function fetchUsersAndPosts() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts'
    ];

    // Fetch both endpoints in parallel
    const responses = await Promise.all(urls.map(url => fetch(url)));

    responses.forEach((res, i) => {
        if (!res.ok) throw new Error(`Request ${i} failed: ${res.status} ${res.statusText}`);
    });

    const [users, posts] = await Promise.all(responses.map(res => res.json()));

    return [...users, ...posts];
}

 fetchUsersAndPosts().then(result => console.log(result)).catch(err => console.error(err));