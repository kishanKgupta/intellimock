CREATE TABLE IF NOT EXISTS mockinterview (
    id SERIAL PRIMARY KEY,
    jsonMockResp TEXT NOT NULL,
    jobPosition VARCHAR NOT NULL,
    jobDesc VARCHAR NOT NULL,
    jobExperience VARCHAR NOT NULL,
    createdBy VARCHAR NOT NULL,
    createdAt VARCHAR,
    mockId VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS useranswer (
    id SERIAL PRIMARY KEY,
    mockIdRef VARCHAR NOT NULL,
    question VARCHAR NOT NULL,
    correctAns TEXT,
    userAns TEXT,
    feedback TEXT,
    rating VARCHAR,
    userEmail VARCHAR,
    createdAt VARCHAR
); 