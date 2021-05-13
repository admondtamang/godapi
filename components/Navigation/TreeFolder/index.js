// import dynamic from "next/dynamic";
// import { testData } from "react-folder-tree";

// const FolderTree = dynamic(() => import("react-folder-tree"), {
//     ssr: false,
// });

// const treeState = {
//     name: "All Cryptos",
//     children: [
//         // {
//         //     name: "Bitcoin",
//         //     _id: 1,
//         //     checked: 0,
//         // },
//         // {
//         //     name: "Etherium",
//         //     _id: 2,
//         //     checked: 0,
//         // },
//         // {
//         //     name: "Polkadot",
//         //     _id: 3,
//         //     checked: 0,
//         // },
//         {
//             name: "POW",
//             children: [
//                 {
//                     name: "Bitcoin",
//                     _id: 5,
//                     checked: 0,
//                 },
//                 {
//                     name: "Litecoin",
//                     _id: 6,
//                     checked: 0,
//                 },
//                 {
//                     name: "Bitcoin Cash",
//                     _id: 7,
//                     checked: 0,
//                 },
//             ],
//         },
//     ],
// };
// const NavigationFolder = ({ folders }) => {
//     const onTreeStateChange = (state) => console.log("tree state: ", state);

//     return <FolderTree data={treeState} onChange={onTreeStateChange} showCheckbox={false} />;
// };

// export default NavigationFolder;
