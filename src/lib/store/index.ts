import type { QuestionsProps } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

export const questionWithCorrectAnswers: Writable<QuestionsProps[]> = writable([]);
export const currentQuestions: Writable<QuestionsProps[]> = writable([]);
export const indexQuestion: Writable<number> = writable(0);
export const userQuestionsAnswers: Writable<QuestionsProps[]> = writable([]);
