// data:{bpa:[{url,method},{url,method}],dms:[]}

export function arrayData(state, { folder, data }) {
    console.log(state, folde, data);
    alert("ehllo");
    state.data.folder.push({ ...data, id: Object.keys(state.data[action.payload.folder]).length });
    return state.data.folder;
}

// export function arrayData(state, { folder, data }) {
//     console.group("hello", folder, data);
//     state.data[folder].push(data);
//     console.group(state.data[folder]);
//     console.log(folder, data, state.data[folder]);
//     return state.data[folder];
// }
