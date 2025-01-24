 import { GoogleGenerativeAI } from "@google/generative-ai";

  const genAI = new GoogleGenerativeAI(process.env.GOO_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: process.env.GOO_MODEL || '' });

 export const getInsights = async (text: string, medType: string ) => {
  try {    
    const prompt = `You are a medical expert assistant. Analyze the given medical ${medType} and provide detailed insights.
     Highlight important findings, potential diagnoses, and any recommendations.Here are raw data ${text}`
    const result = await model.generateContent(prompt);
     return result.response.text()

  } catch (error) {
    console.log(error,'error in getting insights goai')
  } 
}

export const getPoints = async (monthHistory: string) => {
  try {
    const prompt = `You are a medical expert assistant. Analyze the given data and give health rating out of 10 points.
    generate result as point number only, if no data or biased data is given generate point to 0, else according to data. Here is raw data: ${monthHistory}`
    const result = await model.generateContent(prompt);
     return result.response.text()
  } catch (error) {
    console.log(error, 'error in getting point goai')
  }
}