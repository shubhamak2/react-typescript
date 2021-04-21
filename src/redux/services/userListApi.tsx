export const fetchData = async () => {
  try {
    const response = await fetch('https://api.github.com/users?since=0&per_page=100');

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchPaginatedData = async (props: any) => {
  try {
    const pageSince = props.id;
    const response = await fetch(`https://api.github.com/users?since=${pageSince}&per_page=100`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchUserDetails = async (props: any) => {
  try {
    const username = props.username;
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchUserHistory = async (props: any) => {
  try {
    const username = props.username;
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
