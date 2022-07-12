export type CarouselDataItemsProps = {
	title: string;
	description: string;
	image: string;
};
export type QuestionsProps = {
	question: string;
	_id: string;
	answers: { answer: string; isCorrect: boolean }[];
};
