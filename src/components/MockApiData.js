// This was located above the App function:

// const useFetch = (url) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch(url).then(async (res) => {
//         if (res.status !== 200) {
//           setData("uh oh error!");
//         }
//         const data = await res.json();
//         setData(data);
//       });
//     }, [setData, url]);

//     return [data];
//   };

// This was located within the App function:

//   const [accountNumber] = useFetch("/user/sample");

// This was located within the return section of the App function:

/* <div>User data: {JSON.stringify(accountNumber)}</div> */
