type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url)
    const wait: T = await response.json()
    return wait
}

foobar<User>('https://jsonplaceholder.typicode.com/users/3')
    .then(user => {
        console.log(user.name);
    })