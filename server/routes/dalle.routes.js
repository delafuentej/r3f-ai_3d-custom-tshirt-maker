import express from 'express';
import * as dotenv  from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
   res.status(200).json({message:'Hi!!!'})
});

router.route('/').post(async(req, res) => {
   try{
       const {prompt} = req.body;
       console.log('prompt', prompt)

       if (!prompt) {
           return res.status(400).json({ message: 'Prompt is required' });
       }

       console.log('Prompt received:', prompt);

       const response = await openai.images.generate({
           model: "dall-e-3",
           prompt:prompt,
           n:1,
           size: '1024x1024',
           response_format: 'b64_json'
       });
       console.log('ai response', response);

       if (!response || !response.data || response.data.length === 0) {
        throw new Error('⚠️ No image data received from OpenAI');
    }

       const image = response.data[0].b64_json;
       console.log('✅ Image generated successfully')
       console.log('image', image);
       res.status(200).json({photo:image});


   }catch(error){
       console.error(error);
       res.status(500).json({message:'Something went wrong'})
   }
})
export default router;