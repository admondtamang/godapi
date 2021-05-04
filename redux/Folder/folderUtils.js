// data:{bpa:[{url,method},{url,method}],dms:[]}

export function arrayData(state, { folder, data }) {
    state.data[folder].push(data);
    console.log(folder, data, state.data[folder]);
    return state.data[folder];
}
