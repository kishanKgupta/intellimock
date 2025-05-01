import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull().unique()
});

export const UserAnswer = pgTable('useranswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').references(() => MockInterview.mockId),
    question: varchar('question').notNull(),
    correctAns: text('correctAns').notNull(),
    userAns: text('userAns').notNull(),
    feedback: text('feedback').notNull(),
    rating: varchar('rating').notNull(),
    userEmail: varchar('userEmail').notNull(),
    createdAt: varchar('createdAt').notNull()
});