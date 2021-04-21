import { USERS_PER_PAGE, USER_API_URL } from './config';

interface PaginationParam {
  id: string;
}

interface UserDetailsParam {
  username: string;
}

export const fetchData = async () => {
  try {
    const response = await fetch(`${USER_API_URL}?since=0&per_page=${USERS_PER_PAGE}`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchPaginatedData = async (props: PaginationParam) => {
  try {
    const pageSince = props.id;
    const response = await fetch(`${USER_API_URL}?since=${pageSince}&per_page=${USERS_PER_PAGE}`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchUserDetails = async (props: UserDetailsParam) => {
  try {
    const username = props.username;
    const response = await fetch(`${USER_API_URL}/${username}/repos`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchUserHistory = async (props: any) => {
  try {
    const username = props.username;
    const response = await fetch(`${USER_API_URL}/${username}/events/public`);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
