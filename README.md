# A perfectly cromulent jobs aggregator

An aggregator for the monthly "Who's Hiring" thread on HackewNews.

You can use `npm run fetch <url>` to get the posts from the monthly “Who’s Hiring?” thread. If you add an OpenAI key to the `.env` file, you can also run `npm run parse-threads <filename>` to have ChatGPT run through the posts and create the file for you.

Or you can pass the file directly to ChatGPT (or similar) with the instructions in  
[src/scripts/parsingInstructions.md](src/scripts/parsingInstructions.md)  
and add the result to  
[src/data/jobData_12_2025.ts](src/data/jobData_12_2025.ts)
