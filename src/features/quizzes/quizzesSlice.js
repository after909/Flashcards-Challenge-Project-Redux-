import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdInTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizIdInTopicId = (quiz) => {
    const {id, topicId} = quiz;
    return (dispatch) => {
      // dispatch multiple actions here
      dispatch(quizzesSlice.actions.addQuiz(quiz));
      dispatch(addQuizIdInTopic({quizId: id, topicId: topicId}));
    };
};

//Selector
export const selectQuizzes  = (state) => state.quizzes.quizzes;

//Export
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;