import { remark } from 'remark';
import html from 'remark-html';

const content = 
`
# 🥦 Reducing Food Waste & Supporting Food Donation

## Why It Matters
Each year, billions of tons of food are wasted globally, leading to excessive greenhouse gas emissions and wasted resources. By reducing food waste at home and donating surplus food, we can significantly lessen our environmental impact and support those in need.

---

## 🌎 The Environmental Impact of Food Waste

# ![Food Waste Impact](http://localhost:3000/foodwastege.jpeg) <!-- Replace with actual image URL -->

- **Greenhouse Gas Emissions**: Food that decomposes in landfills releases methane, a potent greenhouse gas that intensifies climate change.
- **Resource Waste**: Producing food demands substantial resources such as water, energy, and labor. When food goes to waste, so do these critical resources.
- **Impact Stats**:  
   - 🌍 **1/3 of all food produced globally is wasted**.
   - 🌱 **Reducing food waste could lower global emissions by up to 8%**.

> **Did you know?** If food waste were a country, it would be the **third-largest emitter of greenhouse gases**, after only China and the United States.

---

## 📋 How to Reduce Food Waste at Home

1. **Plan Ahead**: Create a weekly meal plan before grocery shopping and stick to a list to avoid overbuying.
2. **Use the First-In, First-Out (FIFO) Method**: Place newer items behind older ones in your fridge and pantry, so you use what you bought first.
3. **Store Food Correctly**: Store fruits and vegetables in the right conditions to extend their freshness.
4. **Repurpose Leftovers**: Try new recipes with leftover ingredients. [Find Recipes for Leftovers](#🍽️-find-recipes-for-leftovers).
5. **Track Expiry Dates**: Keep an eye on expiry dates and set reminders to use food before it spoils.

> **Pro Tip**: Use a food tracking app to remember what’s in your pantry, reduce waste, and save money!

---

## 🍽️ Find Recipes for Leftovers

Have leftover ingredients? Try creating delicious new dishes with these recipe resources to avoid letting good food go to waste:

- [Spoonacular Recipe Finder](https://spoonacular.com/recipes)
- [Edamam Recipe Search](https://www.edamam.com/)

> Discover zero-waste recipes that make the most of leftover vegetables, grains, and more!

---

## 🧡 Food Donation Resources

Donating surplus food helps reduce waste and supports people in need. Here’s how to get started:

1. **Find Nearby Donation Centers**:
   - Use [Google’s Food Bank Locator](https://www.google.com/maps) to find local shelters and food banks near you.
   - Connect with local charities or community groups that accept food donations.

2. **List Surplus Food for Donation**:
   - Apps like **OLIO** and **Food Rescue US** allow you to list surplus food and connect with shelters for easy pickup or drop-off.
   - **Charity Navigator** offers a list of food-related charities where you can contribute.

3. **Organize a Community Food Drive**:
   - Encourage your community to participate in a local food drive.
   - Schedule regular drop-offs to nearby shelters, especially during holiday seasons when needs are higher.

# ![Food Donation](http://localhost:3000/community-food-drive-stockcake.jpg) <!-- Replace with actual image URL -->

---

## 🌱 Join the Movement to Reduce Food Waste

By making small changes at home, you contribute to a global movement dedicated to combating food waste. Together, we can create a more sustainable world with less waste and more support for those in need.

> Let’s make an impact by changing habits, sharing resources, and spreading the word!

---

## 📚 Further Reading and Resources

- [UN Food and Agriculture Organization (FAO): Food Waste Statistics](https://www.fao.org/food-waste)
- [EPA Guide on Reducing Wasted Food at Home](https://www.epa.gov/recycle/reducing-wasted-food-home)
- [Love Food Hate Waste](https://lovefoodhatewaste.com)

> **Get Involved**: Spread awareness, share these resources, and encourage friends and family to take steps to reduce food waste and donate surplus food.

---

**Together, let’s tackle food waste, support those in need, and make a positive impact on the planet!** 🌍
`;

export default function Markdown() {
  const result = remark().use(html).processSync(content).toString();
  return (
    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: result }} />
  );
}
