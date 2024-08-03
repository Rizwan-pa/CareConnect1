import { motion } from 'framer-motion';
import React from 'react';

const EmpoweringHealthyLiving = () => {
  const posts = [
    {
      id: 1,
      title: 'The Best Diet for a Healthy Life',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: `Maintaining a healthy diet is essential for overall well-being. It helps prevent chronic diseases, supports mental health, and promotes longevity. Here are some detailed steps to improve your diet:

        **1. Incorporate More Fruits and Vegetables:**
        Fruits and vegetables are packed with vitamins, minerals, fiber, and antioxidants. Aim to fill half your plate with fruits and vegetables at every meal. Experiment with different kinds and colors to get a variety of nutrients. Smoothies, salads, and steamed vegetables are great ways to include them in your diet.

        **2. Choose Whole Grains:**
        Whole grains retain all parts of the grain, providing more nutrients and fiber than refined grains. Examples include whole wheat, brown rice, quinoa, and oats. Replace white bread, pasta, and rice with their whole-grain counterparts for better nutrition.

        **3. Include Lean Proteins:**
        Lean proteins are essential for muscle repair and growth. Opt for chicken, turkey, fish, beans, lentils, and nuts. Fish, in particular, is rich in omega-3 fatty acids, which are good for heart health. Try to include a source of protein in each meal to stay satiated longer.

        **4. Limit Added Sugars and Saturated Fats:**
        Excessive sugar and saturated fats can lead to weight gain and increase the risk of chronic diseases. Read food labels to check for added sugars, and opt for healthier fat sources like avocados, nuts, and olive oil instead of butter and lard.

        **5. Stay Hydrated:**
        Water is crucial for digestion, nutrient absorption, and overall bodily functions. Aim to drink at least 8 glasses of water a day. Herbal teas and water-rich fruits and vegetables can also contribute to your hydration goals.
      `,
    },
    {
      id: 2,
      title: 'Top Fitness Tips from the Experts',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
      content: `Staying active is crucial for maintaining a healthy lifestyle. Regular exercise can help control weight, reduce the risk of chronic disease, and improve mental health. Here are some expert tips to keep you on track:

        **1. Set Realistic Goals:**
        Start with small, achievable goals and gradually increase the intensity and duration of your workouts. Setting unrealistic goals can lead to frustration and burnout. Celebrate your progress to stay motivated.

        **2. Mix Up Your Routine:**
        Incorporate a variety of exercises to keep things interesting and work different muscle groups. A balanced routine should include cardiovascular exercise (like running, cycling, or swimming), strength training (using weights or body weight exercises), and flexibility exercises (like yoga or stretching).

        **3. Stay Consistent:**
        Consistency is key to reaping the benefits of exercise. Create a workout schedule that fits your lifestyle and stick to it. Even on busy days, try to squeeze in a quick workout to maintain your momentum.

        **4. Listen to Your Body:**
        Pay attention to how your body feels during and after exercise. Rest when needed, and don't push through pain. Overtraining can lead to injuries and setbacks, so it's important to balance activity with adequate rest.

        **5. Find a Workout Buddy:**
        Exercising with a friend or joining a fitness group can provide motivation and make workouts more enjoyable. Social support can help you stay committed and make the experience more fun.
      `,
    },
    {
      id: 3,
      title: 'How to Maintain a Balanced Lifestyle',
      img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      content: `A balanced lifestyle involves managing various aspects of your life, including work, relationships, health, and personal growth. Here are some tips to help you maintain balance:

        **1. Prioritize Your Time:**
        Identify what's most important to you and allocate your time accordingly. Use tools like calendars and to-do lists to organize your day and ensure you spend time on what truly matters.

        **2. Practice Mindfulness:**
        Mindfulness involves being present in the moment and fully engaging with your current activity. Techniques like meditation, deep breathing, and mindful eating can help reduce stress and increase awareness.

        **3. Ensure Adequate Rest:**
        Quality sleep is essential for physical and mental health. Aim for 7-9 hours of sleep per night and establish a regular sleep schedule. Create a relaxing bedtime routine to help you unwind and prepare for rest.

        **4. Engage in Hobbies:**
        Pursuing hobbies and activities you enjoy can provide a sense of fulfillment and relaxation. Whether it's reading, gardening, painting, or playing a musical instrument, make time for activities that bring you joy.

        **5. Foster Relationships:**
        Strong social connections are linked to better mental health and longevity. Spend time with loved ones, communicate openly, and seek support when needed. Building and maintaining healthy relationships is a vital part of a balanced life.
      `,
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Empowering Healthy Living</h1>
      </header>

      <main style={styles.main}>
        {posts.map((post, index) => (
          <motion.section
            key={post.id}
            style={{...styles.postSection, flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div style={styles.postContent}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <img src={post.img} alt={post.title} style={styles.postImage} />
          </motion.section>
        ))}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Empowering Healthy Living. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    maxWidth: '1600px',
    margin: '0 auto',
  },
  postSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  postTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
  },
  postImage: {
    width: '50%',
    height: 'auto',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  postContent: {
    flex: 1,
    fontSize: '1.2em',
    textAlign: 'justify',
  },
  footer: {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
  },
};

export default EmpoweringHealthyLiving;
