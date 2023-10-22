import { getUserQuestions } from '@/lib/actions/user.actions';
import { SearchParamsProps } from '@/types';
import React from 'react'
import QuestionCard from '../cards/QuestionCard';
import Pagination from './Pagination';

interface Props extends SearchParamsProps {
    userId: string;
    clerkId: string;
}
const QuestionsTab = async ({searchParams, userId, clerkId}:Props) => {

    const response = await getUserQuestions({
userId,
page: searchParams.page ? +searchParams.page : 1,
    })
  return (
    <>
    {response.questions.map((question) => (
        <QuestionCard 
        key={question._id}
        _id={question._id}
        clerkId={clerkId}
        title={question.title}
        tags={question.tags}
        author={question.author}
        upvotes={question.upvotes}
        views={question.views}
        answers={question.answers}
        createdAt={question.createdAt}
        />

    ))}
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={response.isNextQuestion}
        />
    </>
  )
}

export default QuestionsTab
