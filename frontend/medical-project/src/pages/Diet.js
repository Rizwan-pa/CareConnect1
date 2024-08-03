import React from 'react';
import './diet.css';
import Navigator from '../components/Navigator';
import image from '../assets/image.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpeg';

const Diet = () => {
  const boxes = [
    {
        imgSrc: image,
        altText: "Unable to loadd",
        title: "Empowering Healthy Living: Lifestyle, Diet, and Fitness Advice from the Experts",
        description: "\"Empowering Healthy Living: Lifestyle, Diet, and Fitness Advice from the Experts\" provides concise, expert-driven tips for improving well-being. It covers essential advice on balanced diets, effective fitness routines, and positive lifestyle changes to help you achieve a healthier, more vibrant life."
      },
      {
        imgSrc: image1,
        altText: "Unable to load",
        title: "Foods To Boost Immunity",
        description: "Our immune system is the body's remarkable defense force, working tirelessly to shield us from harmful invaders. While it's a complex network of cells and organs, one of the most accessible ways to support this vital system is through our diet. Certain foods are packed with essential nutrients that can help bolster immunity, creating a stronger defense against illnesses. Let's explore the world of immunity-boosting foods and discover how they can contribute to overall well-being."
      },
      {
        imgSrc: image2,
        altText: "Unable to load",
        title: "Nourish Your Body from Within: Preventing Vitamin Deficiencies<",
        description: "\"Vitamins, the unsung heroes of our health, play a crucial role in almost every bodily function. From boosting immunity to supporting energy production, these essential nutrients are the foundation of well-being. Unfortunately, many of us fall short of consuming the recommended daily intake of vitamins. By understanding the importance of a balanced diet and incorporating vitamin-rich foods into our meals, we can effectively prevent deficiencies and optimize our overall health. Let's explore the world of nutrient-packed foods and discover how to nourish our bodies from within."
      },
      {
        imgSrc: image3,
        altText: "Unable to load",
        title: "Pack on the Pounds Healthily: The Power of Food",
        description: "Gaining weight can be a challenge, especially if you have a naturally fast metabolism. However, it's essential to approach weight gain in a healthy and sustainable way. The right foods can provide the necessary nutrients and calories to support healthy weight gain. Let's explore the world of calorie-dense, nutrient-rich foods that can help you achieve your weight goals without compromising your health."
      },
      {
        imgSrc: image4,
        altText: "Unable to load",
        title: "Shed the Pounds, Nourish Your Body: The Power of Food",
        description: "\"Weight loss is a journey that involves many factors, but diet plays a crucial role. While there's no magic food for rapid weight loss, certain foods can support your weight loss goals when combined with regular exercise and a balanced lifestyle. By making smart food choices, you can boost your metabolism, reduce cravings, and feel fuller for longer. Let's explore the world of weight-loss-friendly foods and discover how to fuel your body for success"
      },
      {
        imgSrc: image5,
        altText: "Unable to load",
        title: "Fuel Your Body, Balance Your Hormones: Nutrition for PCOS",
        description: "Polycystic Ovary Syndrome (PCOS) affects millions of women and can manifest in various symptoms, including irregular periods, acne, and difficulty conceiving. While there's no one-size-fits-all approach to managing PCOS, diet plays a crucial role in helping regulate hormones, manage weight, and improve overall well-being. By making informed food choices, women with PCOS can take control of their symptoms and enhance their quality of life. Let's explore the power of nutrition in managing PCOS and discover how to create a personalized dietary plan."
      } 
  ];

  return (

    <div className='rt'>
      <Navigator/>
      <h2>HEALTHY EATING SIMPLIFIED</h2>
      <p>Healthy eating enhances overall well-being by providing essential nutrients 
        that support immune function, heart health, and digestion while reducing the 
        risk of chronic diseases. Prioritizing a balanced diet promotes stable energy
        , mental clarity, and a higher quality of life.</p>
      <div className="container">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <img src={box.imgSrc} alt={box.altText} />
            <h3>{box.title}</h3>
            <p>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;