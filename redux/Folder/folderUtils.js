// data:{bpa:[{url,method},{url,method}],dms:[]}

export function arrayData(state, { folder, data }) {
    state.data[folder].push({ ...data, id: Object.keys(state.data[action.payload.folder]).length });
    return state.data[folder];
}
