import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics:{}
    },
    reducers: {
        addTopic: (state, action) => {
           const { id, name, icon } = action.payload;
           state.topics[id] = {
            id: id,
            name: name,
            icon: icon,
            quizIds: []
           }
        },
        addQuizIdInTopic: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

//Selectors
export const selectTopics = (state) => state.topics.topics;

//Export

export const { addTopic, addQuizIdInTopic } = topicsSlice.actions;
export default topicsSlice.reducer;