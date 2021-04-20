export const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users?since=1&per_page=100');

      return await response.json();
    } catch (err) {
      console.error(err);
    }
  };

export const fetchPaginatedData = async (props: any) => {
    try {
      const pageSince = props.pageNumber;
      const response = await fetch(`https://api.github.com/users?since=${pageSince}&per_page=100`);

      return await response.json();
    } catch (err) {
      console.error(err);
    }
  };
