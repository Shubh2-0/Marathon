# 🏃‍♀️ Marathon Energy Drink Problem

This repository contains a solution to the Marathon Energy Drink Problem, which is a type of DSA (Data Structure and Algorithms) question. The problem involves participating in a marathon and choosing the optimal starting point to complete the entire marathon. Each starting point has a different amount of energy drinks, and each energy drink gives a specific amount of energy. 💪💧

## 📜 Problem Description

In this marathon, there are multiple starting points labeled from 0 to n-1, where n is the total number of starting points. Each starting point has an associated energy drink counter that indicates the number of energy drinks available at that point. However, not all energy drinks provide the same amount of energy. ⚡🚀

Assuming that you start the marathon with no energy, your goal is to determine the starting point that allows you to complete the entire marathon. You can only run 1 km with one unit of energy. 🏁🏃‍♂️

## 💡 Solution Approach

To solve this problem efficiently, we can use the concept of prefix sums or cumulative sums. The idea is to calculate the total energy at each starting point by accumulating the energy from the energy drinks encountered so far. 🧮💡

Here's the general approach to find the optimal starting point:

1. Calculate the total energy required to complete the marathon by summing up the distances between all starting points. 📏🔋

2. Initialize variables `totalEnergy` and `minStartingPoint` to track the total energy and the optimal starting point, respectively.

3. Iterate over each starting point and calculate the total energy obtained by considering the energy drinks encountered. 🏃‍♂️💧

4. If the total energy obtained at a particular starting point is greater than or equal to the total energy required to complete the marathon, update the `minStartingPoint` to the current starting point.

5. Finally, the value of `minStartingPoint` will represent the optimal starting point from which you should begin running to complete the marathon. 🏆🥇

## 🚀 Usage

To use the solution provided in this repository, you can follow these steps:

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/Shubh2-0/Marathon.git
   ```

2. Navigate to the cloned repository:

   ```
   cd Marathon
   ```

3. Open the repository in your preferred code editor.

4. Inside the repository, you will find the solution code in the `solution.js` file.

5. Implement the solution based on the provided approach. You can modify the existing `fun` function or create a new function to solve the problem.

6. Once you have implemented the solution, you can run the code using Node.js or your preferred JavaScript runtime environment.

   ```
   node solution.js
   ```

7. The code will execute, and the output will be displayed in the console, indicating the optimal starting point for the marathon.

Feel free to modify the code, adapt it to your specific needs, and experiment with different approaches to solve the Marathon Energy Drink Problem.

If you encounter any issues or have questions, please feel free to reach out. Happy coding!

## 🤝 Contributing

If you have any improvements or suggestions for solving the Marathon Energy Drink Problem more efficiently, please feel free to contribute. You can submit a pull request with your changes, and they will be reviewed.

Please ensure that any contributions adhere to the existing code style and follow good software development practices.

## 📝 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for both commercial and non-commercial purposes.

## 🙏 Acknowledgments

- This problem is a common type of DSA question, and the solution provided here is a general approach. Different optimizations or variations
