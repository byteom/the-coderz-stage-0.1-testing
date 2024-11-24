export const units = [
    {
        title: "Unit I: Concepts and Basics of C++ Programming",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=0s",
        quizlink: "",
        lessons: [
            { name: "Introduction to cin and cout", lessonkey: "intro_cin_cout" },
            { name: "Creating Classes and Class Objects", lessonkey: "classes_objects" },
            { name: "Structures, Unions, and Enumerations", lessonkey: "structs_unions_enums" },
            { name: "Inline and Non-inline Member Functions", lessonkey: "inline_memberfunc" },
            { name: "Procedural vs. Object-Oriented Programming", lessonkey: "oop_concepts" }
        ]
    },
    {
        title: "Unit II: Pointers, Reference Variables, Arrays, and Strings",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=27003s",
        quizlink: "",
        lessons: [
            { name: "Pointer Basics and Pointer Arithmetic", lessonkey: "pointer_basics" },
            { name: "Handling Dangling and Wild Pointers", lessonkey: "dangling_wild_pointers" },
            { name: "The 'this' Pointer and Array of Objects", lessonkey: "this_pointer" },
            { name: "Using Standard C++ String Class", lessonkey: "string_class" },
            { name: "Multidimensional Arrays in Classes", lessonkey: "multi_arrays" }
        ]
    },
    {
        title: "Unit III: Data File Operations and Constructors",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=32251s",
        quizlink: "",
        lessons: [
            { name: "File Opening, Closing, and Modes", lessonkey: "file_operations" },
            { name: "Sequential and Random File Processing", lessonkey: "file_processing" },
            { name: "Binary File Operations", lessonkey: "binary_files" },
            { name: "Constructors and Destructors", lessonkey: "constructors_destructors" },
            { name: "Copy Constructor and Initializer Lists", lessonkey: "copy_constructor" }
        ]
    },
    {
        title: "Unit IV: Operator Overloading and Inheritance",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=37020s",
        quizlink: "",
        lessons: [
            { name: "Unary and Binary Operator Overloading", lessonkey: "operator_overloading" },
            { name: "Type Conversions and Class Types", lessonkey: "type_conversion" },
            { name: "Inheritance Basics and Types", lessonkey: "inheritance_basics" },
            { name: "Modes of Inheritance and Overriding", lessonkey: "inheritance_modes" },
            { name: "Resolving Ambiguities in Inheritance", lessonkey: "inheritance_ambiguities" }
        ]
    },
    {
        title: "Unit V: Dynamic Memory Management and Polymorphism",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=39558s",
        quizlink: "",
        lessons: [
            { name: "Dynamic Memory with new and delete", lessonkey: "dynamic_memory" },
            { name: "Virtual Destructors and Abstract Classes", lessonkey: "virtual_destructors" },
            { name: "Polymorphism and Virtual Functions", lessonkey: "polymorphism" },
            { name: "Pure Virtual Functions and Late Binding", lessonkey: "virtual_functions" }
        ]
    },
    {
        title: "Unit VI: Exception Handling, Templates, and STL",
        youtube: "https://www.youtube.com/watch?v=7hcQQEHZPiQ&t=130s",
        quizlink: "",
        lessons: [
            { name: "Basics of Exception Handling", lessonkey: "exception_handling" },
            { name: "Function and Class Templates", lessonkey: "templates" },
            { name: "Introduction to Standard Template Library", lessonkey: "stl_intro" },
            { name: "Using STL Containers - Vector and List", lessonkey: "stl_containers" }
        ]
    }
];

export const lessonData = {
    'intro_cin_cout': {
    title: "Introduction to cin and cout",
    description: "Learn the basics of input and output in C++ using cin and cout, which are fundamental for user interaction in console-based applications.",
    sections: [
        {
            "title": "What is cout?",
            "content": "cout (short for 'console output') is an object of the ostream class that is part of the iostream library in C++. It is used to output data to the standard output (usually the console). The insertion operator << is used to send data to cout. You can output various data types, including strings, integers, floating-point numbers, and more. Additionally, you can chain multiple << operators to output multiple values in a single statement.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            cout << "Hello, World!" << endl;
            cout << "C++ is fun!" << endl;
            return 0;
        }`
        },
        {
            "title": "What is cin?",
            "content": "cin (short for 'console input') is an object of the istream class that is used to read input from the standard input (usually the keyboard). It works with the extraction operator >> to retrieve data. Similar to cout, cin supports various data types. However, it is important to note that cin reads input until it encounters whitespace, making it less suitable for strings with spaces unless combined with getline.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            int age;
            cout << "Enter your age: ";
            cin >> age;
            cout << "You are " << age << " years old." << endl;
            return 0;
        }`
        },
        {
            "title": "Using cin and cout Together",
            "content": "cin and cout can be combined in a program to enable user interaction. For instance, you can prompt the user for input using cout, capture the input using cin, and then display the processed result back to the user using cout.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            string name;
            cout << "Enter your name: ";
            cin >> name;
            cout << "Hello, " << name << "!" << endl;
            return 0;
        }`
        },
        {
            "title": "Tips for Using cin and cout",
            "content": "1. Always include <iostream> and use the 'std' namespace or prefix cin and cout with 'std::'.\n2. Use endl or '\\n' to add a newline after output for better formatting.\n3. For strings with spaces, use getline(cin, variable) instead of cin >> variable.\n4. Handle input errors using cin.fail() to improve robustness.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            string fullName;
            cout << "Enter your full name: ";
            cin.ignore(); // Clear any leftover characters in the input buffer
            getline(cin, fullName); // Read the entire line
            cout << "Hello, " << fullName << "!" << endl;
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that takes two integers as input and displays their sum.",
            hint: "Use cin to read the integers and cout to display the result.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            int num1, num2;
            cout << "Enter two integers: ";
            cin >> num1 >> num2;
            cout << "The sum is: " << num1 + num2 << endl;
            return 0;
        }`
        },
        {
            question: "Create a program that asks the user for their favorite color and prints a personalized message.",
            hint: "Use a string variable to store the user's input.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string color;
            cout << "What is your favorite color? ";
            cin >> color;
            cout << "Wow, " << color << " is a great choice!" << endl;
            return 0;
        }`
        },
        {
            question: "Implement a program that reads a floating-point number from the user and displays it.",
            hint: "Ensure to include the proper data type for the variable.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            float number;
            cout << "Enter a floating-point number: ";
            cin >> number;
            cout << "You entered: " << number << endl;
            return 0;
        }`
        },
        {
            question: "Write a program that asks the user for their first and last name and prints them together.",
            hint: "Use two string variables to store the first and last names.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string firstName, lastName;
            cout << "Enter your first name: ";
            cin >> firstName;
            cout << "Enter your last name: ";
            cin >> lastName;
            cout << "Hello, " << firstName << " " << lastName << "!" << endl;
            return 0;
        }`
        },
        {
            question: "Enhance the name program to handle full names with spaces.",
            hint: "Use getline to read the input instead of cin >>.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string fullName;
            cout << "Enter your full name: ";
            cin.ignore(); // Clear input buffer
            getline(cin, fullName);
            cout << "Nice to meet you, " << fullName << "!" << endl;
            return 0;
        }`
        }
    ]
},

    'classes_objects': {
    title: "Creating Classes and Class Objects",
    description: "Understand how to define classes and create objects in C++.",
    sections: [
        {
            title: "What is a Class?",
            content: "A class is a blueprint for creating objects. It defines a data type by bundling data and methods that work on the data into one single unit."
        },
        {
            title: "Defining a Class",
            content: "You define a class using the class keyword, followed by the class name and the body of the class enclosed in curly braces.",
            code: `#include <iostream>
        using namespace std;
    
        class Dog {
        public:
            void bark() {
                cout << "Woof!" << endl;
            }
        };
    
        int main() {
            Dog myDog;
            myDog.bark();
            return 0;
        }`
        },
        {
            title: "Creating Objects",
            content: "You create an object by declaring a variable of the class type. This allocates memory for the object.",
            code: `#include <iostream>
        using namespace std;
    
        class Car {
        public:
            string model;
            void display() {
                cout << "Car model: " << model << endl;
            }
        };
    
        int main() {
            Car myCar;
            myCar.model = "Toyota";
            myCar.display();
            return 0;
        }`
        },
        {
            title: "Simple Classes",
            content: "These are basic classes with attributes and methods.",
            code: `class Simple {
    public:
        void display() {
            cout << "Simple Class" << endl;
        }
};`
        },
        {
            title: "Static Classes",
            content: "Static classes contain only static members and methods.",
            code: `class StaticClass {
    public:
        static int count;
        static void display() {
            cout << "Count: " << count << endl;
        }
};
int StaticClass::count = 0;`
        },
        {
            title: "Parameterized Classes",
            content: "These classes use parameters in methods or constructors.",
            code: `class Parameterized {
    public:
        int value;
        Parameterized(int v) {
            value = v;
        }
};`
        },
        {
            title: "Friend Classes and Functions",
            content: "A friend function or class can access private and protected members of another class.",
            code: `#include <iostream>
        using namespace std;
    
        class Test {
        private:
            int value = 42;
            friend void showValue(Test t); // Friend function
        };
    
        void showValue(Test t) {
            cout << "Value: " << t.value << endl;
        }
    
        int main() {
            Test obj;
            showValue(obj);
            return 0;
        }`
        },
        {
            title: "Inheritance",
            content: "Inheritance allows a class (child) to inherit attributes and methods from another class (parent).",
            code: `#include <iostream>
        using namespace std;
    
        class Parent {
        public:
            void display() {
                cout << "This is the parent class." << endl;
            }
        };
    
        class Child : public Parent {
        public:
            void show() {
                cout << "This is the child class." << endl;
            }
        };
    
        int main() {
            Child c;
            c.display();
            c.show();
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class named Student with attributes for name and age, and a method to display the details.",
            hint: "Define the class and create an object to test the method."
        },
        {
            question: "Implement a class named Rectangle that has methods to calculate the area and perimeter.",
            hint: "Include methods that take width and height as parameters."
        },
        {
            question: "Write a program that creates two objects of a class representing Books and displays their titles.",
            hint: "Use separate objects to hold different book details."
        },
        {
            question: "Design a class for a simple Calculator with methods for addition, subtraction, multiplication, and division.",
            hint: "Each method should accept two parameters and return the result."
        }
    ]
},
'structs_unions_enums': {
    title: "Structures, Unions, and Enumerations",
    description: "Learn about structures, unions, and enumerations in C++. These are powerful user-defined data types that help organize, optimize, and make data handling easier. Structures allow grouping related variables of different types, unions optimize memory usage by sharing the same memory for different members, and enumerations define a set of named integral constants for better code readability and maintainability.",
    sections: [
        {
            title: "What is a Structure?",
            content: "A structure is a user-defined data type in C++ that allows you to combine data items of different types into a single logical unit. Structures are particularly useful for representing real-world entities where attributes can have different data types. For example, a `Person` might have a name (string), age (integer), and height (float).",
            code: `#include <iostream>
        using namespace std;
    
        struct Person {
            string name;
            int age;
            float height;
        };
    
        int main() {
            Person person;
            person.name = "Alice";
            person.age = 30;
            person.height = 5.5;
            cout << person.name << " is " << person.age << " years old and " << person.height << " feet tall." << endl;
            return 0;
        }`
        },
        {
            title: "What is a Union?",
            content: "A union is a user-defined data type similar to a structure but with a key difference: it can store only one of its non-static data members at a time. All members share the same memory location, making unions memory-efficient. They are particularly useful when only one of the members will be used at a given time, such as storing a value that could be either an integer, a float, or a character.",
            code: `#include <iostream>
        using namespace std;
    
        union Data {
            int intVal;
            float floatVal;
            char charVal;
        };
    
        int main() {
            Data data;
            data.intVal = 10;
            cout << "Integer: " << data.intVal << endl;
            data.floatVal = 220.5;
            cout << "Float: " << data.floatVal << endl; // Note: this overwrites intVal
            data.charVal = 'A';
            cout << "Character: " << data.charVal << endl; // Note: this overwrites floatVal
            return 0;
        }`
        },
        {
            title: "What is an Enumeration?",
            content: "An enumeration (enum) is a user-defined data type that consists of a set of named integral constants. Enumerations improve code readability by allowing you to use meaningful names instead of numbers. For example, days of the week can be represented as `Sunday`, `Monday`, etc., instead of `0`, `1`, and so on. Enumerations are also type-safe, ensuring you don't accidentally assign invalid values.",
            code: `#include <iostream>
        using namespace std;
    
        enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    
        int main() {
            Days today = Wednesday;
            cout << "Day number: " << today << endl; // Outputs 3
            if (today == Wednesday) {
                cout << "It's midweek!" << endl;
            }
            return 0;
        }`
        },
        {
            title: "Structures vs Unions",
            content: "While both structures and unions allow grouping of different data types, their primary difference lies in memory allocation. In structures, each member has its own memory, and all members can be accessed simultaneously. In unions, all members share the same memory, so only one member can hold a value at a time, which makes unions more memory-efficient in specific scenarios.",
            code: `#include <iostream>
        using namespace std;
    
        struct StructureExample {
            int intVal;
            float floatVal;
        };
    
        union UnionExample {
            int intVal;
            float floatVal;
        };
    
        int main() {
            StructureExample s;
            s.intVal = 10;
            s.floatVal = 220.5;
            cout << "Structure - Integer: " << s.intVal << ", Float: " << s.floatVal << endl;

            UnionExample u;
            u.intVal = 10;
            cout << "Union - Integer: " << u.intVal << endl;
            u.floatVal = 220.5; // Overwrites intVal
            cout << "Union - Float: " << u.floatVal << endl;
            return 0;
        }`
        },
        {
            title: "Advanced Enumerations in C++",
            content: "Modern C++ (C++11 and above) introduces scoped enumerations using the `enum class` keyword. Scoped enums provide better type safety and prevent name conflicts since the enumerators are scoped within the enum.",
            code: `#include <iostream>
        using namespace std;
    
        enum class Color { Red, Green, Blue };
    
        int main() {
            Color myColor = Color::Green;
            if (myColor == Color::Green) {
                cout << "The color is Green!" << endl;
            }
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a structure to represent a Book with title, author, and price attributes, and print the details.",
            hint: "Define the structure and use an object to store data."
        },
        {
            question: "Implement a union to represent a value that can either be an integer or a float, and demonstrate its use.",
            hint: "Use the union and assign values to test its functionality."
        },
        {
            question: "Write a program that uses an enumeration to represent the days of the week and display them.",
            hint: "Use a loop to iterate through the enumeration values."
        },
        {
            question: "Design a structure that contains a person's name, age, and height, and write a function to display this information.",
            hint: "Define the structure and implement a function that takes a structure object as a parameter."
        },
        {
            question: "Create a scoped enumeration (enum class) to represent different traffic light states and demonstrate switching between them.",
            hint: "Use an `enum class` and a switch statement to handle states like Red, Yellow, and Green."
        }
    ]
},

    'inline_memberfunc': {
    title: "Inline and Non-inline Member Functions",
    description: "Learn about inline and non-inline member functions in C++, their advantages, use cases, and performance implications. Inline functions are expanded directly at the call site, while non-inline functions are invoked at runtime.",
    sections: [
        {
            title: "What are Inline Functions?",
            content: "An inline function is a function defined inside the class declaration, suggesting the compiler to insert the complete function body directly at the call site. This reduces the overhead of a function call, such as saving registers, pushing arguments to the stack, and jumping to the function code.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            inline int square(int x) { // Define an inline function for calculating the square of a number
                return x * x; // Return the square of the input number
            }
        };

        int main() {
            Math math; // Create an object of the Math class
            cout << "Square of 5: " << math.square(5) << endl; // Call the inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Non-inline Functions",
            content: "Non-inline functions are member functions defined outside the class and are invoked when called. They do not provide the performance benefits of inline functions but are better for large or complex functions.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            int cube(int x); // Declare a non-inline function to calculate the cube of a number
        };

        int Math::cube(int x) { // Define the function outside the class using the scope resolution operator ::
            return x * x * x; // Return the cube of the input number
        }

        int main() {
            Math math; // Create an object of the Math class
            cout << "Cube of 3: " << math.cube(3) << endl; // Call the non-inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Inline Functions Outside the Class",
            content: "Inline functions can also be defined outside the class using the `inline` keyword. This approach allows cleaner class definitions while retaining inline behavior.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            inline int add(int x, int y); // Declare an inline function for addition
        };

        inline int Math::add(int x, int y) { // Define the inline function outside the class
            return x + y; // Return the sum of two numbers
        }

        int main() {
            Math math; // Create an object of the Math class
            cout << "Addition of 5 and 7: " << math.add(5, 7) << endl; // Call the inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Compiler Behavior with Inline Functions",
            content: "The `inline` keyword is a suggestion to the compiler. The compiler decides whether to inline a function based on factors such as size and complexity. Modern compilers can automatically optimize small functions without requiring the `inline` keyword."
        }
    ],
    practiceQuestions: [
        {
            question: "Create an inline function to calculate the area of a rectangle and use it in your main function.",
            hint: "Define the function in the class."
        },
        {
            question: "Implement a non-inline function to calculate the factorial of a number.",
            hint: "Define the function outside of the class and ensure it can be called in main."
        },
        {
            question: "Write a program that has both inline and non-inline functions and measures their performance.",
            hint: "Use the same calculation in both styles and print results."
        },
        {
            question: "Design a class with an inline function for finding the maximum of two numbers.",
            hint: "Make sure to call this inline function from the main method."
        },
        {
            question: "Create a class that contains an inline function for multiplication and a non-inline function for division. Demonstrate their usage.",
            hint: "Define one function inline inside the class and the other outside the class."
        },
        {
            question: "Explore compiler behavior by defining a large inline function and testing if it is treated as inline by the compiler.",
            hint: "Check the compiler's behavior for inlining large functions with complex logic."
        }
    ]
},

    'oop_concepts': {
    title: "Procedural vs. Object-Oriented Programming",
    description: "Learn the key differences between procedural programming and object-oriented programming (OOP). Procedural programming organizes code into procedures or functions, while OOP structures programs using objects that encapsulate both data and behavior. OOP promotes modularity, reusability, and scalability, making it a widely adopted paradigm.",
    sections: [
        {
            title: "What is Procedural Programming?",
            content: "Procedural programming is a programming paradigm that uses procedures or routines to execute tasks. It emphasizes a linear top-down structure where functions operate on data and are called explicitly. This paradigm is simple and efficient for small programs but can become difficult to manage in large systems.",
            code: `#include <iostream>

        void printMessage() { 
            // A standalone function that contains the procedure logic.
            cout << "Hello from Procedural Programming!" << endl;
        }

        int main() {
            printMessage(); // Call the procedural function directly.
            return 0;
        }`
        },
        {
            title: "What is Object-Oriented Programming?",
            content: "Object-oriented programming (OOP) organizes code into objects that encapsulate data and behavior. Objects are instances of classes, which serve as blueprints. OOP emphasizes concepts like encapsulation, inheritance, and polymorphism to create modular and reusable code.",
            code: `#include <iostream>

        class Greeting { 
            // The 'Greeting' class encapsulates data (if any) and behavior (the printMessage function).
        public:
            void printMessage() { 
                // A member function of the class that provides behavior related to the Greeting object.
                cout << "Hello from Object-Oriented Programming!" << endl;
            }
        };

        int main() {
            Greeting greet; // Create an object of the 'Greeting' class.
            greet.printMessage(); // Call the member function using the object.
            return 0;
        }`
        },
        {
            title: "Key Differences",
            content: "1. **Structure**: Procedural programming is linear, whereas OOP is based on objects.\n2. **Data Handling**: In procedural programming, data is often separate from functions, while in OOP, data is bundled with functions.\n3. **Reusability**: OOP promotes code reusability through inheritance and polymorphism, which are not available in procedural programming."
        },
        {
            title: "Encapsulation in OOP",
            content: "Encapsulation in OOP refers to bundling data and methods into a single unit (class) and restricting direct access to the internal state. This helps in maintaining data integrity and preventing unauthorized access.",
            code: `#include <iostream>

        class BankAccount { 
            // Encapsulation: All data members are private, and access is provided through public methods.
        private:
            double balance;

        public:
            BankAccount() : balance(0) {} // Constructor to initialize balance to 0.

            void deposit(double amount) { 
                // Public method to add money to the balance.
                if (amount > 0) {
                    balance += amount;
                }
            }

            void withdraw(double amount) { 
                // Public method to withdraw money, ensuring the balance remains non-negative.
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                }
            }

            void showBalance() const { 
                // Public method to display the current balance.
                cout << "Current balance: " << balance << endl;
            }
        };

        int main() {
            BankAccount account; // Create an object of 'BankAccount' class.
            account.deposit(1000); // Call the deposit method.
            account.withdraw(500); // Call the withdraw method.
            account.showBalance(); // Call the method to display the balance.
            return 0;
        }`
        },
        {
            title: "Inheritance in OOP",
            content: "Inheritance in OOP allows a class (child) to inherit properties and methods from another class (parent). This promotes reusability and allows for hierarchical class structures.",
            code: `#include <iostream>

        class Animal { 
            // Parent class providing common behavior for all animals.
        public:
            void eat() { 
                // Common method for all animals.
                cout << "This animal eats food." << endl;
            }
        };

        class Dog : public Animal { 
            // Child class inheriting from Animal and adding its own behavior.
        public:
            void bark() { 
                // Behavior specific to Dog.
                cout << "The dog barks." << endl;
            }
        };

        int main() {
            Dog myDog; // Create an object of the 'Dog' class.
            myDog.eat(); // Call inherited method.
            myDog.bark(); // Call Dog-specific method.
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program using procedural programming to calculate the sum of the first n natural numbers.",
            hint: "Use a loop and a function to achieve this."
        },
        {
            question: "Create a class that encapsulates the behavior of a bank account and demonstrates depositing and withdrawing money.",
            hint: "Include methods for the operations and a way to display the balance."
        },
        {
            question: "Implement both procedural and object-oriented versions of a simple program that manages a list of students.",
            hint: "Compare the two implementations."
        },
        {
            question: "Design a simple program in OOP to model a library system where books can be added and borrowed.",
            hint: "Use classes to represent Books and Library."
        },
        {
            question: "Create an inheritance hierarchy for vehicles (e.g., Car, Truck, Motorcycle) with shared and specific behaviors.",
            hint: "Use a base class for shared attributes and derived classes for specific behaviors."
        }
    ]
},

    'pointer_basics': {
    title: "Pointer Basics and Pointer Arithmetic",
    description: "Learn the fundamentals of pointers in C++ and how pointer arithmetic is used to navigate and manipulate memory. Pointers are essential for understanding dynamic memory allocation, arrays, and advanced data structures like linked lists.",
    sections: [
        {
            title: "Introduction to Pointers",
            content: "Pointers are variables that store the memory address of another variable. They are declared using the asterisk (*) symbol. Pointers are widely used in C++ for memory management, efficient array manipulation, and passing by reference.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int a = 10; // Declare an integer variable
            int *ptr = &a; // Declare a pointer and assign it the address of 'a'
            cout << "Value of a: " << a << endl; // Output the value of 'a'
            cout << "Address of a: " << &a << endl; // Output the address of 'a'
            cout << "Pointer ptr holds address: " << ptr << endl; // Output the address stored in the pointer
            cout << "Value pointed by ptr: " << *ptr << endl; // Dereference the pointer to get the value of 'a'
            return 0;
        }`
        },
        {
            title: "Dereferencing a Pointer",
            content: "Dereferencing a pointer means accessing or modifying the value stored at the memory location the pointer points to. This is done using the `*` operator. Dereferencing is useful for indirect access and modifying variables via references.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int a = 20; // Declare an integer variable
            int *ptr = &a; // Pointer 'ptr' holds the address of 'a'
            cout << "Value of a: " << *ptr << endl; // Dereference 'ptr' to access the value of 'a'
            *ptr = 25; // Modify the value of 'a' through the pointer
            cout << "Updated value of a: " << a << endl; // Verify that 'a' has been updated
            return 0;
        }`
        },
        {
            title: "Pointer Arithmetic",
            content: "Pointer arithmetic allows you to perform operations like addition or subtraction on pointers. The pointer moves in memory by the size of the type it points to. This is useful for traversing arrays or blocks of memory.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int arr[] = {10, 20, 30, 40}; // Declare an integer array
            int *ptr = arr; // Pointer 'ptr' points to the first element of the array

            cout << "First element: " << *ptr << endl; // Access the first element
            cout << "Second element: " << *(ptr + 1) << endl; // Access the second element using pointer arithmetic
            cout << "Third element: " << *(ptr + 2) << endl; // Access the third element
            return 0;
        }`
        },
        {
            title: "Null Pointers",
            content: "A null pointer is a pointer that is not assigned any address and points to NULL. It is used to indicate that the pointer is not currently pointing to a valid object or memory.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int *ptr = NULL; // Declare a null pointer
            if (ptr == NULL) {
                cout << "Pointer is null and not pointing to any memory." << endl;
            }
            return 0;
        }`
        },
        {
            title: "Dangling Pointers",
            content: "A dangling pointer occurs when a pointer points to memory that has already been deallocated or is no longer valid. Dereferencing such pointers can lead to undefined behavior.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int *ptr = new int(5); // Dynamically allocate memory and initialize with 5
            cout << "Value: " << *ptr << endl; // Output the value
            delete ptr; // Deallocate memory
            ptr = NULL; // Avoid dangling pointer by setting it to NULL
            return 0;
        }`
        },
        {
            title: "Pointers to Pointers",
            content: "A pointer to a pointer is a variable that stores the address of another pointer. This can be useful for multi-level data structures or modifying the value of a pointer from another function.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int a = 50;
            int *ptr = &a; // Pointer to the integer
            int **ptr2 = &ptr; // Pointer to the pointer

            cout << "Value of a: " << a << endl; // Output the value of 'a'
            cout << "Value using ptr: " << *ptr << endl; // Dereference the first pointer
            cout << "Value using ptr2: " << **ptr2 << endl; // Dereference the second pointer
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program to declare a pointer, assign it to an integer variable, and print the variable’s address and value through the pointer.",
            hint: "Use `&` for address and `*` for dereferencing."
        },
        {
            question: "Create an array of integers and use a pointer to print each element in the array.",
            hint: "Use pointer arithmetic to traverse the array."
        },
        {
            question: "Write a function that takes an integer pointer as an argument and doubles the value it points to.",
            hint: "Use dereferencing within the function to modify the value."
        },
        {
            question: "Demonstrate how to use a pointer to swap the values of two variables.",
            hint: "Use a temporary variable to hold one value during the swap."
        },
        {
            question: "Write a program that declares two pointers pointing to different variables. Print their addresses and check if they are different.",
            hint: "Use `&` to get the addresses of each variable."
        },
        {
            question: "Write a program that uses a pointer to dynamically allocate an array of integers and print its contents.",
            hint: "Use `new` to allocate the array and pointer arithmetic to access elements."
        },
        {
            question: "Implement a function that returns a pointer to the maximum of two integers.",
            hint: "Compare the integers and return the pointer to the larger one."
        }
    ]
},

    'dangling_wild_pointers': {
    title: "Handling Dangling and Wild Pointers",
    description: "Learn about dangling and wild pointers, their associated risks, and best practices to avoid them. Dangling pointers occur when a pointer points to memory that has been deallocated, while wild pointers are uninitialized pointers that can point to arbitrary memory locations. Both can cause undefined behavior, memory corruption, or program crashes.",
    sections: [
        {
            title: "What is a Dangling Pointer?",
            content: "A dangling pointer is a pointer that points to memory that has already been deallocated or freed. Dereferencing such a pointer results in undefined behavior. To prevent dangling pointers, always set the pointer to `nullptr` after deleting the memory it points to.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int *ptr = new int(10); // Dynamically allocate memory and initialize with 10
            cout << "Value: " << *ptr << endl; // Access the value stored in the allocated memory

            delete ptr; // Free the allocated memory
            ptr = nullptr; // Reset the pointer to nullptr to prevent dangling

            if (ptr == nullptr) {
                cout << "Pointer is null. No risk of dangling pointer!" << endl;
            }
            return 0;
        }`
        },
        {
            title: "What is a Wild Pointer?",
            content: "A wild pointer is a pointer that is declared but not initialized. It can point to any arbitrary memory location, leading to undefined behavior if dereferenced. Always initialize pointers to `nullptr` or assign them a valid memory address before use.",
            code: `#include <iostream>
        using namespace std;

        int main() {
            int *ptr; // Wild pointer (uninitialized)

            // Uncommenting the next line will lead to undefined behavior
            // cout << *ptr << endl; // Accessing wild pointer (undefined behavior)

            ptr = nullptr; // Initialize pointer to nullptr to make it safe
            if (ptr == nullptr) {
                cout << "Pointer is initialized to nullptr. Safe to use now!" << endl;
            }
            return 0;
        }`
        },
        {
            title: "Avoiding Dangling Pointers",
            content: "To avoid dangling pointers, ensure that you:\n1. Set the pointer to `nullptr` after deleting memory.\n2. Avoid returning addresses of local variables from functions.\n3. Use smart pointers like `std::unique_ptr` or `std::shared_ptr` to manage dynamic memory automatically.",
            code: `#include <iostream>
        using namespace std;

        void safeDelete(int *&ptr) { 
            // Function to safely delete memory and avoid dangling pointers
            delete ptr; // Free the memory
            ptr = nullptr; // Reset the pointer to nullptr
        }

        int main() {
            int *ptr = new int(50); // Allocate memory
            cout << "Value: " << *ptr << endl; // Output the value

            safeDelete(ptr); // Safely delete and reset the pointer
            if (ptr == nullptr) {
                cout << "Pointer safely reset to nullptr." << endl;
            }
            return 0;
        }`
        },
        {
            title: "Avoiding Wild Pointers",
            content: "To avoid wild pointers:\n1. Always initialize pointers to `nullptr` during declaration.\n2. Assign pointers a valid memory address before dereferencing.\n3. Use smart pointers where possible to ensure safe memory management.",
            code: `
        #include <iostream>
        using namespace std;

        int main() {
            int *ptr = nullptr; // Initialize pointer to nullptr (safe state)

            if (ptr == nullptr) {
                cout << "Pointer is null. Safe to use!" << endl;
            }

            ptr = new int(100); // Assign valid memory
            cout << "Value: " << *ptr << endl; // Safely access the allocated memory

            delete ptr; // Free memory
            ptr = nullptr; // Reset to avoid dangling pointer
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a program that demonstrates a dangling pointer. Use `nullptr` to avoid it after deallocation.",
            hint: "Use `delete` to deallocate and `nullptr` to reset."
        },
        {
            question: "Write a program with an uninitialized pointer and show how it could lead to a crash.",
            hint: "Declare a pointer without assignment, and try to access it."
        },
        {
            question: "Create a function that accepts a pointer to dynamically allocated memory, deletes the memory, and sets the pointer to `nullptr`.",
            hint: "Use `delete` inside the function and set the pointer to `nullptr`."
        },
        {
            question: "Write a program with a dynamically allocated array and a pointer to traverse it. Free the memory at the end and avoid dangling by resetting the pointer.",
            hint: "Use `new` to allocate the array, and `delete[]` for deallocation."
        },
        {
            question: "Demonstrate how to avoid wild pointers by initializing a pointer to `nullptr` and checking before accessing it.",
            hint: "Use `nullptr` assignment during pointer declaration."
        },
        {
            question: "Implement a function that uses a double pointer to dynamically allocate memory, initializes it, and deletes it safely.",
            hint: "Use a pointer to a pointer to manage the memory allocation and deletion."
        },
        {
            question: "Write a program to demonstrate a dangling pointer caused by returning the address of a local variable and correct it.",
            hint: "Avoid returning local variable addresses from functions."
        }
    ]
},

    'this_pointer': {
    title: "The 'this' Pointer and Array of Objects",
    description: "Understand the `this` pointer in C++ and its role in referring to the calling object. Learn how to manage arrays of objects efficiently. The `this` pointer enables functions to access the current object's members and resolve naming conflicts, while arrays of objects simplify managing collections of similar objects.",
    sections: [
        {
            title: "The 'this' Pointer",
            content: "The `this` pointer in C++ is an implicit pointer available to all non-static member functions. It points to the object that invoked the member function. The `this` pointer is used to access or modify the calling object's members, especially when there are naming conflicts between member variables and function parameters.",
            code: `#include <iostream>
using namespace std;

class Sample {
    int x; // Member variable
public:
    Sample(int x) { 
        // Constructor to initialize the member variable using the 'this' pointer
        this->x = x; // 'this->x' refers to the member variable, while 'x' is the parameter
    }

    void display() {
        cout << "Value of x: " << this->x << endl; 
        // Use 'this->x' to explicitly refer to the member variable
    }
};

int main() {
    Sample obj(42); // Create an object with x initialized to 42
    obj.display(); // Display the value of x
    return 0;
}`
        },
        {
            title: "Using 'this' to Resolve Naming Conflicts",
            content: "When a member variable shares the same name as a function parameter, the `this` pointer is used to distinguish between the two. This helps avoid ambiguity and ensures the correct variable is accessed.",
            code: `
#include <iostream>
using namespace std;

class Person {
    string name; // Member variable
public:
    void setName(string name) { 
        // Parameter 'name' shadows the member variable 'name'
        this->name = name; // Use 'this->name' to refer to the member variable
    }

    void display() {
        cout << "Name: " << this->name << endl; 
        // Explicitly use 'this->name' for clarity
    }
};

int main() {
    Person p;
    p.setName("Alice"); // Set the name using the parameter
    p.display(); // Display the name
    return 0;
}`
        },
        {
            title: "Returning *this from Member Functions",
            content: "The `this` pointer can be used to return the current object from a member function. This is particularly useful for method chaining, where multiple methods are called on the same object in a single statement.",
            code: `
#include <iostream>
using namespace std;

class Counter {
    int value; // Member variable to hold the counter's value
public:
    Counter() : value(0) {} // Constructor initializes value to 0

    Counter& increment() { 
        // Increment the counter and return the current object
        value++;
        return *this; // Use 'this' pointer to return the current object
    }

    void display() const {
        cout << "Current value: " << value << endl;
    }
};

int main() {
    Counter c;
    c.increment().increment().increment(); // Chain multiple calls to increment
    c.display(); // Display the current value of the counter
    return 0;
}`
        },
        {
            title: "Array of Objects",
            content: "An array of objects allows you to manage multiple instances of a class in a structured way. Each element in the array is an object, and you can use loops to initialize or modify their members.",
            code: `
#include <iostream>
using namespace std;

class Student {
    string name; // Student's name
    int id; // Student's ID
public:
    void setDetails(string name, int id) {
        this->name = name; // Use 'this' pointer for clarity
        this->id = id;
    }

    void display() const {
        cout << "ID: " << id << ", Name: " << name << endl;
    }
};

int main() {
    Student students[3]; // Array of 3 Student objects

    // Initialize each student object
    students[0].setDetails("Alice", 101);
    students[1].setDetails("Bob", 102);
    students[2].setDetails("Charlie", 103);

    // Display details of each student
    for (int i = 0; i < 3; ++i) {
        students[i].display();
    }

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class with a member function that uses the `this` pointer to initialize a member variable.",
            hint: "Inside the constructor, use `this->` to refer to the member variable."
        },
        {
            question: "Write a program that demonstrates how the `this` pointer can resolve naming conflicts between member variables and parameters.",
            hint: "Use parameters with the same name as member variables."
        },
        {
            question: "Implement a method that returns the current object using the `this` pointer.",
            hint: "Return `*this` at the end of the function."
        },
        {
            question: "Create an array of objects of a class and initialize each object's member variable with a unique value.",
            hint: "Use a loop to initialize each object in the array."
        },
        {
            question: "Write a program where the `this` pointer is used to return an object from a member function that modifies the object's data.",
            hint: "Return `*this` after making changes to member variables."
        },
        {
            question: "Create a class with a method that uses the `this` pointer to return the sum of the object's member variable and a parameter.",
            hint: "Return `this->member + parameter`."
        },
        {
            question: "Write a program where the `this` pointer is used in a constructor to set a flag indicating whether the object is initialized.",
            hint: "Use the `this` pointer to set the flag based on the object's member values."
        }
    ]
},

    'string_class': {
    title: "Using Standard C++ String Class",
    description: "Explore the features of the C++ `std::string` class, which provides a more flexible and safer way to handle text compared to C-style strings. With `std::string`, you can easily manipulate text using built-in methods and operators.",
    sections: [
        {
            title: "Creating a String",
            content: "The `std::string` class provides a convenient way to create and manage strings. Unlike C-style strings, `std::string` handles memory management internally and offers useful member functions for text manipulation.",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Alice"; // Declare a string and initialize it with text
    cout << "Hello, " << name << "!" << endl; // Output the string
    return 0;
}`
        },
        {
            title: "Concatenating Strings",
            content: "You can concatenate strings using the `+` operator or the `.append()` method. This allows you to combine multiple strings easily.",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Alice"; // First part of the string
    string lastName = "Johnson"; // Second part of the string
    string fullName = firstName + " " + lastName; // Concatenate using '+'
    cout << "Full Name: " << fullName << endl;

    // Using append()
    string greeting = "Hello, ";
    greeting.append(firstName); // Append the first name
    cout << greeting << "!" << endl; // Output the greeting
    return 0;
}`
        },
        {
            title: "Getting String Length",
            content: "The `.length()` or `.size()` methods return the number of characters in a string. This is useful for determining the size of user input or validating constraints.",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Hello, World!";
    cout << "Length of the string: " << text.length() << endl; // Output the string length
    return 0;
}`
        },
        {
            title: "Finding Characters in a String",
            content: "The `.find()` method allows you to search for a specific character or substring within a string. It returns the index of the first occurrence or `std::string::npos` if not found.",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word = "programming";
    size_t position = word.find('g'); // Find the first occurrence of 'g'
    if (position != string::npos) {
        cout << "'g' found at position: " << position << endl;
    } else {
        cout << "'g' not found!" << endl;
    }
    return 0;
}`
        },
        {
            title: "Replacing Characters in a String",
            content: "The `.replace()` method lets you replace a portion of a string with another substring. It modifies the original string in place.",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string sentence = "I love programming!";
    sentence.replace(7, 11, "C++"); // Replace "programming" with "C++"
    cout << sentence << endl; // Output: "I love C++!"
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that takes a user’s name as input, stores it in a string, and then greets the user by name.",
            hint: "Use `cin` for input and `cout` for output."
        },
        {
            question: "Create a program that concatenates two strings using the `+` operator.",
            hint: "Use `+` between two strings and print the result."
        },
        {
            question: "Write a program that takes a sentence from the user and outputs its length.",
            hint: "Use the `.length()` method."
        },
        {
            question: "Ask the user to enter a word and check if it contains the letter 'a'.",
            hint: "Use `.find('a')` to locate 'a' in the string."
        },
        {
            question: "Write a program that replaces all spaces in a sentence with hyphens (`-`).",
            hint: "Use a loop or `.replace()` to modify the string."
        },
        {
            question: "Write a program that compares two strings entered by the user and prints if they are equal or not.",
            hint: "Use the `==` operator to compare strings."
        }
    ]
},
    'multi_arrays': {
    title: "Multidimensional Arrays in Classes",
    description: "Learn how to use multidimensional arrays in C++ classes to store and manipulate complex data structures like matrices or grids. Multidimensional arrays provide a structured way to manage tabular or spatial data.",
    sections: [
        {
            title: "Defining Multidimensional Arrays",
            content: "Multidimensional arrays are arrays of arrays, often used to represent matrices or tables. In C++, they are defined by specifying multiple sizes in square brackets. For example, a 2x3 matrix would look like this:",
            code: `#include <iostream>
using namespace std;

int main() {
    int matrix[2][3] = { // Define a 2x3 matrix
        {1, 2, 3},
        {4, 5, 6}
    };

    // Print the matrix
    for (int i = 0; i < 2; ++i) { // Loop through rows
        for (int j = 0; j < 3; ++j) { // Loop through columns
            cout << matrix[i][j] << " "; // Access each element
        }
        cout << endl;
    }

    return 0;
}`
        },
        {
            title: "Using Multidimensional Arrays in Classes",
            content: "Multidimensional arrays can be integrated into classes to encapsulate and manipulate matrix-like data structures. This is particularly useful for applications like scientific computations or game grids.",
            code: `#include <iostream>
using namespace std;

class Matrix {
    int data[3][3]; // 3x3 matrix
public:
    void initializeToZero() {
        // Set all elements to zero
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                data[i][j] = 0;
            }
        }
    }

    void setElement(int row, int col, int value) {
        // Set a specific element in the matrix
        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            data[row][col] = value;
        } else {
            cout << "Invalid indices!" << endl;
        }
    }

    void printMatrix() const {
        // Print the matrix in grid format
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                cout << data[i][j] << " ";
            }
            cout << endl;
        }
    }

    void transpose() {
        // Transpose the matrix (swap rows and columns)
        for (int i = 0; i < 3; ++i) {
            for (int j = i + 1; j < 3; ++j) {
                swap(data[i][j], data[j][i]);
            }
        }
    }
};

int main() {
    Matrix matrix;
    matrix.initializeToZero(); // Initialize all elements to zero
    matrix.setElement(1, 1, 5); // Set element at row 1, column 1 to 5
    cout << "Matrix after initialization and setting one element:" << endl;
    matrix.printMatrix(); // Print the matrix

    matrix.transpose(); // Transpose the matrix
    cout << "Matrix after transposition:" << endl;
    matrix.printMatrix(); // Print the transposed matrix
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a class `Matrix` with a 3x3 integer array. Add a method to initialize all elements to zero.",
            hint: "Use a nested loop in the method to set each element to zero."
        },
        {
            question: "Add a method to the `Matrix` class that allows setting a specific element at a given row and column.",
            hint: "Use array indexing to set the value at the specified row and column."
        },
        {
            question: "Create a `Matrix` class with a method to print all elements in the matrix in a grid format.",
            hint: "Use a nested loop to print each row and column element."
        },
        {
            question: "Add a method to the `Matrix` class to transpose the matrix (swap rows and columns).",
            hint: "Use a loop to swap elements along the diagonal."
        },
        {
            question: "Write a program that creates a 2D array and fills it with the product of its indices (i.e., arr[i][j] = i * j).",
            hint: "Use nested loops and set each element as `i * j`."
        },
        {
            question: "Create a class `Grid` with a 5x5 integer array and a method to fill the diagonal elements with 1s and the rest with 0s.",
            hint: "Set elements where `i == j` to 1, and others to 0."
        }
    ]
},

    'file_operations': {
    title: "File Opening, Closing, and Modes",
    description: "Learn how to work with files in C++ using the `<fstream>` library. Understand how to open, read, write, and close files efficiently, and explore various file access modes for different operations like appending, truncating, and binary mode.",
    sections: [
        {
            title: "Opening Files",
            content: "To open a file in C++, you use the `fstream`, `ifstream`, or `ofstream` classes from the `<fstream>` library. These classes allow you to work with files in read (`ifstream`), write (`ofstream`), or both modes (`fstream`). Here's an example of writing to a file:",
            code: `#include <fstream>
using namespace std;

int main() {
    ofstream file("example.txt");  // Opens file in write mode
    if (file.is_open()) {         // Check if the file opened successfully
        file << "Hello, world!";  // Write to the file
        file.close();             // Close the file
    } else {
        cout << "Failed to open the file!" << endl;
    }
    return 0;
}`
        },
        {
            title: "File Modes",
            content: "File modes determine how files are accessed. Common modes include:\n- `ios::in`: Open for reading.\n- `ios::out`: Open for writing (truncates the file).\n- `ios::app`: Append to the file.\n- `ios::binary`: Open in binary mode.\nMultiple modes can be combined using the bitwise `|` operator. For example:",
            code: `#include <fstream>
using namespace std;

int main() {
    ofstream file("example.txt", ios::out | ios::app);  // Open in write and append mode
    if (file.is_open()) {
        file << "Appending this text to the file." << endl;  // Append new text
        file.close();
    } else {
        cout << "Failed to open the file!" << endl;
    }
    return 0;
}`
        },
        {
            title: "Reading from Files",
            content: "To read from a file, use the `ifstream` class. Use `getline()` for line-by-line reading or the stream operator `>>` for word-by-word reading.",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ifstream file("example.txt");  // Open file in read mode
    if (file.is_open()) {
        string line;
        while (getline(file, line)) {  // Read line by line
            cout << line << endl;     // Output each line to the console
        }
        file.close();
    } else {
        cout << "Failed to open the file!" << endl;
    }
    return 0;
}`
        },
        {
            title: "Checking File Status",
            content: "Always check if a file operation was successful using `is_open()` for file streams. This avoids errors caused by missing or inaccessible files.",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ifstream file("nonexistent.txt");  // Try to open a file that doesn't exist
    if (!file.is_open()) {            // Check if the file opened successfully
        cout << "File not found!" << endl;
    }
    return 0;
}`
        },
        {
            title: "Binary File Operations",
            content: "C++ allows reading and writing binary files using the `ios::binary` mode. This is useful for non-text data like images or serialized objects.",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ofstream file("binaryfile.dat", ios::out | ios::binary);  // Open in binary mode
    if (file.is_open()) {
        int number = 12345;
        file.write(reinterpret_cast<char*>(&number), sizeof(number));  // Write binary data
        file.close();
    }

    ifstream infile("binaryfile.dat", ios::in | ios::binary);  // Read the binary file
    if (infile.is_open()) {
        int readNumber;
        infile.read(reinterpret_cast<char*>(&readNumber), sizeof(readNumber));  // Read binary data
        cout << "Number read from binary file: " << readNumber << endl;
        infile.close();
    }
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program to open a file and write your name in it, then close the file.",
            hint: "Use `ofstream` to open and write to the file."
        },
        {
            question: "Modify the program to check if the file opened successfully before writing to it.",
            hint: "Use `is_open()` to check if the file is opened."
        },
        {
            question: "Write a program that opens a file in append mode and adds a new line of text to it.",
            hint: "Use `ios::app` mode in `ofstream`."
        },
        {
            question: "Create a program that reads from a file and prints its content to the console.",
            hint: "Use `ifstream` to read from the file."
        },
        {
            question: "Write a program that reads numbers from a binary file and calculates their sum.",
            hint: "Use `ios::binary` mode and read integers from the file."
        },
        {
            question: "Write a program that creates a text file, writes a list of items to it, and then reads the items back.",
            hint: "Use `ofstream` to write and `ifstream` to read the file."
        }
    ]
},

    'file_processing': {
    title: "Sequential and Random File Processing",
    description: "Learn how to process files sequentially or randomly in C++. Sequential processing reads or writes data in order, from the beginning to the end of a file. Random access allows jumping to specific locations in the file, making it ideal for modifying or reading specific portions of data.",
    sections: [
        {
            title: "Sequential Processing",
            content: "In sequential processing, data is accessed linearly from the start of the file to the end. This method is simple and efficient for tasks like reading logs or processing entire datasets.",
            code: `#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main() {
    ifstream file("example.txt"); // Open the file in read mode
    if (!file.is_open()) {
        cout << "Failed to open the file!" << endl;
        return 1;
    }

    string line;
    while (getline(file, line)) { // Read the file line by line
        cout << line << endl;    // Output each line
    }

    file.close(); // Close the file
    return 0;
}`
        },
        {
            title: "Random Processing",
            content: "Random access allows you to jump to specific locations in a file for reading or writing. The file pointer can be moved using `seekg` (for reading) and `seekp` (for writing), and the current position can be retrieved using `tellg` or `tellp`.",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    fstream file("example.txt", ios::in | ios::out); // Open the file for both reading and writing
    if (!file.is_open()) {
        cout << "Failed to open the file!" << endl;
        return 1;
    }

    file.seekg(10); // Move the read pointer to the 10th byte
    char ch;
    file.get(ch); // Read the character at the 10th byte
    cout << "Character at 10th byte: " << ch << endl;

    file.seekp(5); // Move the write pointer to the 5th byte
    file.put('X'); // Write 'X' at the 5th byte

    file.close(); // Close the file
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program to read a file sequentially and count the number of lines.",
            hint: "Use `getline()` in a loop to read lines."
        },
        {
            question: "Write a program to access the middle line in a file using random access.",
            hint: "Use `seekg()` to move the file pointer."
        },
        {
            question: "Create a program that modifies a specific line in a file using random access.",
            hint: "Use `seekp()` to jump to the desired location in the file."
        },
        {
            question: "Write a program to count the number of characters in a file using sequential processing.",
            hint: "Use a loop to read one character at a time and increment a counter."
        },
        {
            question: "Create a program that appends text to the end of a file using random access.",
            hint: "Use `seekp(0, ios::end)` to move the pointer to the end of the file."
        },
        {
            question: "Write a program to overwrite the first 10 bytes of a file with asterisks (*) using random access.",
            hint: "Use `seekp(0)` to position the write pointer at the beginning."
        }
    ]
},

    'binary_files': {
    title: "Binary File Operations",
    description: "Learn how to work with binary files in C++ for efficient storage and retrieval of data in a non-human-readable format. Binary files allow compact and fast storage for structured data like arrays, structs, or objects.",
    sections: [
        {
            title: "Writing to Binary Files",
            content: "Binary files store data in raw memory format, which is more compact than text files. Use the `write()` method to save data in binary format. Here's an example of writing an integer to a binary file:",
            code: `#include <fstream>
using namespace std;

int main() {
    ofstream file("binary.dat", ios::binary); // Open file in binary write mode
    int num = 1234; // Integer to write
    if (file.is_open()) {
        file.write(reinterpret_cast<char*>(&num), sizeof(num)); // Write data in binary format
        file.close(); // Close the file
        cout << "Data written successfully to binary.dat" << endl;
    } else {
        cout << "Failed to open the file for writing." << endl;
    }
    return 0;
}`
        },
        {
            title: "Reading from Binary Files",
            content: "To retrieve binary data, open the file in binary read mode and use the `read()` method. Here's how you can read an integer from a binary file:",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ifstream file("binary.dat", ios::binary); // Open file in binary read mode
    int num; // Variable to store the read value
    if (file.is_open()) {
        file.read(reinterpret_cast<char*>(&num), sizeof(num)); // Read data in binary format
        file.close(); // Close the file
        cout << "Data read from binary.dat: " << num << endl;
    } else {
        cout << "Failed to open the file for reading." << endl;
    }
    return 0;
}`
        },
        {
            title: "Writing and Reading Arrays",
            content: "You can use binary files to store and retrieve arrays efficiently. Use `write()` to save an entire array and `read()` to retrieve it. Here's an example:",
            code: `#include <fstream>
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5}; // Array to write
    // Writing the array to the file
    ofstream outfile("array.dat", ios::binary);
    if (outfile.is_open()) {
        outfile.write(reinterpret_cast<char*>(arr), sizeof(arr)); // Write the entire array
        outfile.close();
        cout << "Array written to array.dat successfully." << endl;
    }

    int readArr[5]; // Array to store the read data
    // Reading the array from the file
    ifstream infile("array.dat", ios::binary);
    if (infile.is_open()) {
        infile.read(reinterpret_cast<char*>(readArr), sizeof(readArr)); // Read the entire array
        infile.close();
        cout << "Array read from array.dat: ";
        for (int i = 0; i < 5; ++i) {
            cout << readArr[i] << " ";
        }
        cout << endl;
    } else {
        cout << "Failed to open the file for reading." << endl;
    }

    return 0;
}`
        },
        {
            title: "Working with Structs",
            content: "You can store complex data structures like structs in binary files by converting them to raw memory format using `reinterpret_cast`. Here's an example:",
            code: `#include <fstream>
#include <iostream>
using namespace std;

struct Person {
    char name[50];
    int age;
    float salary;
};

int main() {
    Person p1 = {"Alice", 30, 50000.0f}; // Data to write

    // Writing struct to the file
    ofstream outfile("person.dat", ios::binary);
    if (outfile.is_open()) {
        outfile.write(reinterpret_cast<char*>(&p1), sizeof(p1)); // Write struct in binary format
        outfile.close();
        cout << "Struct written to person.dat successfully." << endl;
    }

    Person p2; // Struct to read data into
    // Reading struct from the file
    ifstream infile("person.dat", ios::binary);
    if (infile.is_open()) {
        infile.read(reinterpret_cast<char*>(&p2), sizeof(p2)); // Read struct in binary format
        infile.close();
        cout << "Data read from person.dat:\n";
        cout << "Name: " << p2.name << "\nAge: " << p2.age << "\nSalary: " << p2.salary << endl;
    } else {
        cout << "Failed to open the file for reading." << endl;
    }

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that writes an array of integers to a binary file.",
            hint: "Use `write()` in a loop or directly with the array."
        },
        {
            question: "Create a program to read the integers from a binary file and display them.",
            hint: "Use `read()` in a loop or directly with the array."
        },
        {
            question: "Write a program that stores a struct in a binary file and retrieves it.",
            hint: "Convert the struct to a `char*` for `write()` and `read()`."
        },
        {
            question: "Write a program to store multiple records (structs) in a binary file and retrieve them all.",
            hint: "Use a loop to write and read structs to/from the file."
        },
        {
            question: "Write a program that appends a new record (struct) to an existing binary file.",
            hint: "Use `ios::app | ios::binary` mode for appending."
        },
        {
            question: "Create a program to find and update a specific record in a binary file based on a key (e.g., name or ID).",
            hint: "Use `seekg()` and `seekp()` to locate and modify the record."
        }
    ]
},

    'constructors_destructors': {
    title: "Constructors and Destructors",
    description: "Learn about constructors and destructors in C++, which are special member functions used for object initialization and cleanup. Constructors are invoked automatically when an object is created, while destructors are called when an object goes out of scope or is explicitly deleted.",
    sections: [
        {
            title: "Constructors",
            content: "A constructor is a special member function that has the same name as the class. It is used to initialize class members and is called automatically when an object is created. Constructors can be parameterized to allow initializing objects with specific values.",
            code: `#include <iostream>
using namespace std;

class Sample {
    int x; // Member variable
public:
    Sample(int val) : x(val) { // Parameterized constructor to initialize x
        cout << "Constructor called. Value of x initialized to " << x << endl;
    }

    void display() {
        cout << "Value of x: " << x << endl;
    }
};

int main() {
    Sample obj1(10); // Constructor called with 10
    obj1.display();  // Display value of x
    Sample obj2(20); // Constructor called with 20
    obj2.display();  // Display value of x
    return 0;
}`
        },
        {
            title: "Destructors",
            content: "A destructor is a special member function that has the same name as the class but is preceded by a tilde (`~`). It is called automatically when an object goes out of scope or is explicitly deleted. Destructors are commonly used for cleanup tasks, such as releasing dynamically allocated memory.",
            code: `#include <iostream>
using namespace std;

class Sample {
public:
    Sample() {
        cout << "Constructor called." << endl;
    }
    ~Sample() { // Destructor definition
        cout << "Destructor called. Cleaning up resources." << endl;
    }
};

int main() {
    Sample obj; // Constructor is called here
    cout << "Inside main function." << endl;
    return 0; // Destructor is automatically called here
}`
        },
        {
            title: "Dynamic Object Management with Destructors",
            content: "When objects are created dynamically using `new`, their destructors are called when `delete` is used. This ensures proper cleanup of resources.",
            code: `#include <iostream>
using namespace std;

class Sample {
public:
    Sample() {
        cout << "Constructor called." << endl;
    }
    ~Sample() { // Destructor definition
        cout << "Destructor called." << endl;
    }
};

int main() {
    Sample* obj = new Sample(); // Dynamically allocate object
    cout << "Dynamic object created." << endl;
    delete obj; // Explicitly delete the object, destructor is called here
    return 0;
}`
        },
        {
            title: "Default and Overloaded Constructors",
            content: "A class can have multiple constructors to handle different initialization scenarios. The default constructor takes no arguments, while overloaded constructors take parameters.",
            code: `#include <iostream>
using namespace std;

class Sample {
    int x, y; // Member variables
public:
    Sample() : x(0), y(0) { // Default constructor
        cout << "Default constructor called. x and y initialized to 0." << endl;
    }

    Sample(int a, int b) : x(a), y(b) { // Parameterized constructor
        cout << "Parameterized constructor called. x = " << x << ", y = " << y << endl;
    }

    void display() {
        cout << "x = " << x << ", y = " << y << endl;
    }
};

int main() {
    Sample obj1;        // Calls default constructor
    obj1.display();
    Sample obj2(5, 10); // Calls parameterized constructor
    obj2.display();
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class with a constructor that initializes a member variable and a destructor that displays a message.",
            hint: "Use `~ClassName()` for the destructor."
        },
        {
            question: "Write a program that dynamically allocates an object and deletes it. Observe when the destructor is called.",
            hint: "Use `new` to create and `delete` to remove the object."
        },
        {
            question: "Add a parameterized constructor to initialize different objects with unique values.",
            hint: "Pass values to the constructor during object creation."
        },
        {
            question: "Write a program that uses both a default and a parameterized constructor to initialize objects differently.",
            hint: "Use constructor overloading."
        },
        {
            question: "Create a class with a destructor that deletes dynamically allocated memory inside the object.",
            hint: "Use `new` to allocate and `delete` inside the destructor."
        },
        {
            question: "Write a program to demonstrate constructor and destructor calls in an array of objects.",
            hint: "Create an array of objects and observe the constructor/destructor calls."
        }
    ]
},

    'copy_constructor': {
    title: "Copy Constructor and Initializer Lists",
    description: "Learn about copy constructors for creating new objects by copying existing ones and initializer lists for efficient and structured member initialization. These are key concepts in managing object creation and duplication in C++.",
    sections: [
        {
            title: "Copy Constructor",
            content: "A copy constructor is a special constructor that initializes an object using another object of the same class. It is called automatically in scenarios like passing objects by value, returning objects from functions, or explicitly copying an object. A copy constructor must take a reference to a const object to avoid infinite recursion.",
            code: `#include <iostream>
using namespace std;

class Sample {
    int x; // Member variable
public:
    // Parameterized constructor
    Sample(int val) : x(val) {
        cout << "Parameterized constructor called. x = " << x << endl;
    }

    // Copy constructor
    Sample(const Sample &obj) : x(obj.x) {
        cout << "Copy constructor called. x = " << x << endl;
    }

    void display() const {
        cout << "Value of x: " << x << endl;
    }
};

int main() {
    Sample obj1(10);       // Parameterized constructor called
    Sample obj2 = obj1;    // Copy constructor called
    obj2.display();        // Display copied value
    return 0;
}`
        },
        {
            title: "Initializer Lists",
            content: "Initializer lists allow initializing class members before the constructor body executes. This is particularly useful for constant (`const`) or reference members, which cannot be assigned values after their declaration. Initializer lists also improve performance by directly initializing members rather than using assignment in the constructor body.",
            code: `#include <iostream>
using namespace std;

class Sample {
    const int x; // Const member variable
public:
    // Constructor using initializer list
    Sample(int val) : x(val) {
        cout << "Initializer list used. x = " << x << endl;
    }

    void display() const {
        cout << "Value of x: " << x << endl;
    }
};

int main() {
    Sample obj(20); // Initializer list initializes x
    obj.display();
    return 0;
}`
        },
        {
            title: "Shallow Copy vs. Deep Copy",
            content: "When a class contains dynamically allocated memory, the default copy constructor performs a shallow copy, copying only the pointer, not the data it points to. A deep copy duplicates the data itself, ensuring each object has its own copy of the resource.",
            code: `#include <iostream>
#include <cstring>
using namespace std;

class Sample {
    char* str; // Pointer to dynamic memory
public:
    // Constructor
    Sample(const char* input) {
        str = new char[strlen(input) + 1];
        strcpy(str, input);
        cout << "Constructor called. String initialized to \"" << str << "\"" << endl;
    }

    // Copy constructor (Deep copy)
    Sample(const Sample &obj) {
        str = new char[strlen(obj.str) + 1];
        strcpy(str, obj.str);
        cout << "Copy constructor called. Copied string: \"" << str << "\"" << endl;
    }

    void display() const {
        cout << "String: " << str << endl;
    }

    ~Sample() {
        delete[] str; // Clean up dynamic memory
        cout << "Destructor called. Memory released." << endl;
    }
};

int main() {
    Sample obj1("Hello, World!"); // Constructor called
    Sample obj2 = obj1;           // Copy constructor called (deep copy)
    obj2.display();               // Display copied string
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class with a copy constructor that allows copying of objects.",
            hint: "Use `ClassName(const ClassName &obj)` to define the copy constructor."
        },
        {
            question: "Write a program that demonstrates the use of an initializer list to initialize a `const` member.",
            hint: "Use `ClassName() : constMember(value) {}` format."
        },
        {
            question: "Write a function that takes an object by value and prints its contents using the copy constructor.",
            hint: "Observe how the copy constructor is called when passing by value."
        },
        {
            question: "Demonstrate the difference between shallow and deep copies using the copy constructor.",
            hint: "If using pointers, ensure each object has a separate copy of dynamically allocated data."
        },
        {
            question: "Write a program that initializes a reference member in a class using an initializer list.",
            hint: "Declare the reference as `const Type&` and use the initializer list to bind it to a value."
        },
        {
            question: "Create a program that copies an array of objects using a copy constructor.",
            hint: "Use a loop to copy each object and observe the constructor calls."
        }
    ]
},

    'operator_overloading': {
    title: "Unary and Binary Operator Overloading",
    description: "Learn how to overload unary and binary operators in C++ to allow custom behavior for built-in operations on user-defined types. Operator overloading enables intuitive interactions with objects of your class, making them behave like built-in types.",
    sections: [
        {
            title: "Unary Operator Overloading",
            content: "Unary operators operate on a single operand. To overload a unary operator, define a member function using the `operator` keyword followed by the operator symbol. Here's an example of overloading the `++` operator:",
            code: `#include <iostream>
using namespace std;

class Counter {
    int count; // Private member variable
public:
    Counter() : count(0) {} // Constructor initializes count to 0

    // Overloading the unary ++ operator
    void operator++() {
        ++count; // Increment the count
    }

    int getCount() const {
        return count; // Return the current count
    }
};

int main() {
    Counter c;
    ++c; // Call the overloaded ++ operator
    cout << "Count after increment: " << c.getCount() << endl;
    return 0;
}`
        },
        {
            title: "Binary Operator Overloading",
            content: "Binary operators operate on two operands. To overload them, define a member function or a friend function. Member functions are preferred for most cases, while friend functions are used when the left-hand operand is not an object of the class. Here's an example of overloading the `+` operator for a `Complex` class:",
            code: `#include <iostream>
using namespace std;

class Complex {
    float real, imag; // Real and imaginary parts of the complex number
public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {} // Constructor

    // Overloading the + operator
    Complex operator+(const Complex &obj) {
        return Complex(real + obj.real, imag + obj.imag);
    }

    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(2.5, 3.5), c2(1.5, 4.5);
    Complex c3 = c1 + c2; // Call the overloaded + operator
    cout << "Sum of complex numbers: ";
    c3.display();
    return 0;
}`
        },
        {
            title: "Overloading Stream Operators",
            content: "Stream operators like `<<` and `>>` are overloaded as friend functions because the left-hand operand (like `cout` or `cin`) is not an object of the class. Here's an example of overloading the `<<` operator to display class contents:",
            code: `#include <iostream>
using namespace std;

class Point {
    int x, y; // Coordinates
public:
    Point(int xVal, int yVal) : x(xVal), y(yVal) {} // Constructor

    // Friend function to overload << operator
    friend ostream& operator<<(ostream &out, const Point &p) {
        out << "(" << p.x << ", " << p.y << ")"; // Format output
        return out;
    }
};

int main() {
    Point p1(3, 4), p2(7, 8);
    cout << "Point 1: " << p1 << endl; // Call overloaded << operator
    cout << "Point 2: " << p2 << endl;
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class that overloads the `++` operator to increment a private integer.",
            hint: "Define a member function to implement the operator."
        },
        {
            question: "Implement a class that overloads the `+` operator for adding two complex numbers.",
            hint: "Return a new object with the summed real and imaginary parts."
        },
        {
            question: "Write a program that overloads the `<<` operator to print the contents of a class.",
            hint: "Define a friend function to access private members."
        },
        {
            question: "Overload the `==` operator to compare two objects of a class for equality.",
            hint: "Check if all the relevant members are equal and return a boolean value."
        },
        {
            question: "Write a program that overloads the `>>` operator to input values into a class.",
            hint: "Use a friend function to read input from the stream."
        },
        {
            question: "Overload the `*` operator for a vector class to calculate the dot product of two vectors.",
            hint: "Multiply corresponding elements and sum them."
        }
    ]
},

    'type_conversion': {
    title: "Type Conversions and Class Types",
    description: "Understand type conversions in C++ and learn how to define conversion operators and constructors to facilitate implicit and explicit conversions between types. These conversions are essential for making your custom types work seamlessly with built-in types.",
    sections: [
        {
            title: "Implicit Conversion",
            content: "Implicit conversion occurs automatically when a value of one type is assigned to a variable of another type. In user-defined classes, constructors with a single parameter can act as implicit conversion constructors, allowing objects of the class to be created from values of the parameter type.",
            code: `#include <iostream>
using namespace std;

class Fraction {
    int numerator, denominator;
public:
    // Constructor allows implicit conversion from integer to Fraction
    Fraction(int num, int denom) : numerator(num), denominator(denom) {
        cout << "Fraction created: " << numerator << "/" << denominator << endl;
    }

    void display() const {
        cout << numerator << "/" << denominator << endl;
    }
};

int main() {
    Fraction f = 5; // Implicit conversion from int to Fraction
    f.display();    // Outputs "5/1" (implicit denominator is 1)
    return 0;
}`
        },
        {
            title: "Explicit Conversion",
            content: "Explicit conversions use a conversion operator defined with the `operator` keyword followed by the target type. These operators allow you to control how objects of your class are converted to other types.",
            code: `#include <iostream>
using namespace std;

class Fraction {
    int numerator, denominator;
public:
    Fraction(int num, int denom) : numerator(num), denominator(denom) {}

    // Conversion operator to float
    operator float() const {
        return (float)numerator / denominator; // Convert fraction to float
    }
};

int main() {
    Fraction f(3, 4); // Create a Fraction object
    float value = (float)f; // Explicit conversion using conversion operator
    cout << "Fraction as float: " << value << endl; // Outputs "0.75"
    return 0;
}`
        },
        {
            title: "Combining Implicit and Explicit Conversions",
            content: "You can define both implicit constructors and explicit conversion operators in the same class to allow seamless interaction between custom and built-in types. Here's an example demonstrating both:",
            code: `#include <iostream>
using namespace std;

class Fraction {
    int numerator, denominator;
public:
    // Constructor for implicit conversion
    Fraction(int num) : numerator(num), denominator(1) {}

    Fraction(int num, int denom) : numerator(num), denominator(denom) {}

    // Conversion operator to float
    operator float() const {
        return (float)numerator / denominator;
    }

    void display() const {
        cout << numerator << "/" << denominator << endl;
    }
};

int main() {
    Fraction f1 = 5; // Implicit conversion from int to Fraction
    Fraction f2(3, 4); // Fraction created with numerator and denominator

    f1.display(); // Outputs "5/1"
    f2.display(); // Outputs "3/4"

    float val = (float)f2; // Explicit conversion to float
    cout << "Fraction as float: " << val << endl; // Outputs "0.75"

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class that can be implicitly converted from an integer to a fraction.",
            hint: "Define a constructor that accepts an integer."
        },
        {
            question: "Implement a conversion operator that converts a fraction to a float.",
            hint: "Use the `operator float()` syntax."
        },
        {
            question: "Write a program that demonstrates both implicit and explicit conversions.",
            hint: "Show cases of both conversions in action."
        },
        {
            question: "Create a class `Currency` that can be converted from an integer (dollars) and to a float (dollars with cents).",
            hint: "Define a constructor for implicit conversion and a conversion operator for explicit conversion."
        },
        {
            question: "Implement a program to compare two fractions by converting them to floats.",
            hint: "Use the conversion operator and compare the float values."
        },
        {
            question: "Write a class `Vector2D` that can be implicitly created from a single float (magnitude) and explicitly converted to its magnitude as a float.",
            hint: "Define a constructor for implicit creation and a conversion operator for explicit magnitude conversion."
        }
    ]
},

    'inheritance_basics': {
    title: "Inheritance Basics and Types",
    description: "Explore the fundamentals of inheritance in C++, including base and derived classes, and the different types of inheritance. Inheritance promotes code reuse by allowing derived classes to extend the functionality of base classes.",
    sections: [
        {
            title: "What is Inheritance?",
            content: "Inheritance allows a class (derived class) to inherit properties and behaviors (methods) from another class (base class). This promotes code reusability by letting new classes reuse, extend, or modify the behavior of existing classes.",
            code: `#include <iostream>
using namespace std;

// Base class
class Base {
public:
    void display() {
        cout << "This is the Base class." << endl;
    }
};

// Derived class inheriting from Base class
class Derived : public Base {
public:
    void show() {
        cout << "This is the Derived class." << endl;
    }
};

int main() {
    Derived obj;
    obj.display(); // Access Base class method
    obj.show();    // Access Derived class method
    return 0;
}`
        },
        {
            title: "Types of Inheritance",
            content: "C++ supports multiple types of inheritance. The relationship between classes can be:\n- **Single Inheritance**: A single base class and a single derived class.\n- **Multiple Inheritance**: A derived class inherits from multiple base classes.\n- **Multilevel Inheritance**: A derived class acts as a base class for another derived class.\n- **Hierarchical Inheritance**: Multiple derived classes inherit from a single base class.\n- **Hybrid Inheritance**: A combination of the above types.",
            code: `#include <iostream>
using namespace std;

// Single Inheritance
class A {
public:
    void showA() {
        cout << "Class A (Base)" << endl;
    }
};

class B : public A { // Inherits from A
public:
    void showB() {
        cout << "Class B (Derived)" << endl;
    }
};

// Multiple Inheritance
class C {
public:
    void showC() {
        cout << "Class C" << endl;
    }
};

class D : public A, public C { // Inherits from A and C
public:
    void showD() {
        cout << "Class D (Derived from A and C)" << endl;
    }
};

// Multilevel Inheritance
class E : public B { // Inherits from B, which inherits from A
public:
    void showE() {
        cout << "Class E (Derived from B)" << endl;
    }
};

int main() {
    B objB;
    objB.showA(); // From A
    objB.showB(); // From B

    D objD;
    objD.showA(); // From A
    objD.showC(); // From C
    objD.showD(); // From D

    E objE;
    objE.showA(); // From A
    objE.showB(); // From B
    objE.showE(); // From E

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a base class and a derived class to demonstrate single inheritance.",
            hint: "Define methods in both classes to show the relationship."
        },
        {
            question: "Implement multiple inheritance using two base classes.",
            hint: "Show how the derived class can access methods from both base classes."
        },
        {
            question: "Write a program to demonstrate multilevel inheritance.",
            hint: "Create a chain of inheritance with three classes."
        },
        {
            question: "Demonstrate hierarchical inheritance by creating multiple derived classes inheriting from a single base class.",
            hint: "Define different methods in each derived class to show their individuality."
        },
        {
            question: "Write a program that uses hybrid inheritance with at least four classes.",
            hint: "Combine multiple and hierarchical inheritance in one program."
        },
        {
            question: "Create a class hierarchy where a derived class inherits a private member of the base class through a public method.",
            hint: "Use protected access in the base class."
        }
    ]
},

    'inheritance_modes': {
    title: "Modes of Inheritance and Overriding",
    description: "Learn about the different modes of inheritance in C++ (public, protected, private) and how method overriding allows derived classes to redefine methods from the base class. Understand how inheritance modes affect member accessibility in derived classes.",
    sections: [
        {
            title: "Modes of Inheritance",
            content: "Inheritance in C++ can be public, protected, or private. These modes determine the accessibility of base class members in the derived class and further derived classes.\n- **Public Inheritance**: Public and protected members of the base class remain public and protected in the derived class.\n- **Protected Inheritance**: Public and protected members of the base class become protected in the derived class.\n- **Private Inheritance**: Public and protected members of the base class become private in the derived class.",
            code: `#include <iostream>
using namespace std;

class Base {
protected:
    int x;
public:
    Base() : x(10) {}
    void showBase() {
        cout << "Base class value of x: " << x << endl;
    }
};

// Public Inheritance
class PublicDerived : public Base {
public:
    void showPublic() {
        cout << "Public inheritance allows access to x: " << x << endl;
    }
};

// Protected Inheritance
class ProtectedDerived : protected Base {
public:
    void showProtected() {
        cout << "Protected inheritance allows access to x: " << x << endl;
    }
};

// Private Inheritance
class PrivateDerived : private Base {
public:
    void showPrivate() {
        cout << "Private inheritance allows access to x: " << x << endl;
    }
};

int main() {
    PublicDerived pub;
    pub.showBase(); // Accessible
    pub.showPublic();

    ProtectedDerived prot;
    prot.showProtected(); // Accessible through a derived class method

    PrivateDerived priv;
    priv.showPrivate(); // Accessible through a derived class method

    return 0;
}`
        },
        {
            title: "Method Overriding",
            content: "Method overriding allows a derived class to provide a specific implementation of a method already defined in its base class. To achieve polymorphism, declare the base class method as `virtual` and override it in the derived class using the same method signature. Use the `override` keyword in the derived class for better clarity and error prevention.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() { // Virtual method in the base class
        cout << "Base display" << endl;
    }
};

class Derived : public Base {
public:
    void display() override { // Overriding the base class method
        cout << "Derived display" << endl;
    }
};

void showDisplay(Base &obj) { // Polymorphic behavior
    obj.display();
}

int main() {
    Base baseObj;
    Derived derivedObj;

    showDisplay(baseObj);    // Calls Base's display
    showDisplay(derivedObj); // Calls Derived's display (overridden method)

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a base class with a method, then derive a class that overrides that method.",
            hint: "Use the `virtual` keyword in the base class."
        },
        {
            question: "Write a program demonstrating public, protected, and private inheritance.",
            hint: "Show how members are accessed in derived classes."
        },
        {
            question: "Implement a scenario where method overriding is used effectively.",
            hint: "Show polymorphic behavior with base and derived classes."
        },
        {
            question: "Write a program demonstrating the use of `override` to catch errors in method overriding.",
            hint: "Deliberately mismatch the method signature in the derived class and observe the error."
        },
        {
            question: "Create a program where a base class method is overridden in a derived class, and both methods are called explicitly.",
            hint: "Use the scope resolution operator (`Base::method()`) to call the base method from the derived class."
        },
        {
            question: "Demonstrate how protected inheritance restricts access to base class members from outside the derived class.",
            hint: "Access members through a public method in the derived class."
        }
    ]
},
    'inheritance_ambiguities': {
    title: "Resolving Ambiguities in Inheritance",
    description: "Learn how to handle ambiguities in multiple inheritance, including those caused by duplicate members in base classes and the diamond problem. Explore scope resolution and virtual inheritance as solutions.",
    sections: [
        {
            title: "Ambiguities in Multiple Inheritance",
            content: "Ambiguities in multiple inheritance occur when a derived class inherits members with the same name from multiple base classes. This leads to confusion about which member to access. To resolve this, use the scope resolution operator to specify the base class explicitly.",
            code: `#include <iostream>
using namespace std;

class A {
public:
    void display() {
        cout << "Display from class A" << endl;
    }
};

class B {
public:
    void display() {
        cout << "Display from class B" << endl;
    }
};

class C : public A, public B {
public:
    void display() {
        A::display(); // Resolving ambiguity by explicitly calling A's method
        B::display(); // Explicitly calling B's method
    }
};

int main() {
    C obj;
    obj.display(); // Calls both A::display and B::display
    return 0;
}`
        },
        {
            title: "Virtual Inheritance",
            content: "Virtual inheritance is used to solve the diamond problem, where a derived class inherits from two base classes that share a common base class. Without virtual inheritance, the derived class would have multiple instances of the shared base class. Virtual inheritance ensures only one shared instance exists.",
            code: `#include <iostream>
using namespace std;

class A {
public:
    void display() {
        cout << "Display from class A" << endl;
    }
};

// Classes B and C virtually inherit from A
class B : virtual public A {};
class C : virtual public A {};

// Class D inherits from both B and C
class D : public B, public C {};

int main() {
    D obj;
    obj.display(); // Calls A's display without ambiguity
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a scenario where an ambiguity arises due to multiple inheritance.",
            hint: "Use two base classes with the same method name."
        },
        {
            question: "Demonstrate the use of scope resolution to resolve ambiguities.",
            hint: "Show how to call the correct method from the base class."
        },
        {
            question: "Implement a program that uses virtual inheritance to prevent the diamond problem.",
            hint: "Create a diamond-shaped inheritance structure."
        },
        {
            question: "Write a program where a derived class explicitly calls constructors of multiple base classes to resolve ambiguity.",
            hint: "Use base class constructors explicitly in the derived class constructor."
        },
        {
            question: "Demonstrate how virtual inheritance affects the order of constructor calls in a diamond inheritance structure.",
            hint: "Observe and explain the sequence of constructor calls."
        },
        {
            question: "Write a program that combines both virtual inheritance and scope resolution to resolve ambiguities.",
            hint: "Create a hybrid scenario with ambiguous method names and diamond-shaped inheritance."
        }
    ]
},

    'dynamic_memory': {
    title: "Dynamic Memory with new and delete",
    description: "Learn about dynamic memory allocation in C++ using the `new` and `delete` operators. Understand how to allocate, use, and deallocate memory efficiently, avoid memory leaks, and handle common pitfalls in dynamic memory management.",
    sections: [
        {
            title: "Using new for Dynamic Allocation",
            content: "The `new` operator allocates memory on the heap and returns a pointer to it. This is used for dynamic memory allocation, which is especially useful when the size of memory needed is not known at compile time. Always initialize dynamically allocated memory before use.",
            code: `#include <iostream>
using namespace std;

int main() {
    int* ptr = new int; // Allocating memory for an integer
    *ptr = 10;          // Assigning a value
    cout << "Value: " << *ptr << endl;

    delete ptr; // Deallocating memory
    ptr = nullptr; // Resetting pointer to prevent dangling
    return 0;
}`
        },
        {
            title: "Using delete for Memory Deallocation",
            content: "The `delete` operator is used to free memory allocated with `new`. For dynamically allocated arrays, use `delete[]` to ensure all elements are properly deallocated. Failing to use `delete` results in memory leaks, where memory is no longer accessible but remains allocated.",
            code: `#include <iostream>
using namespace std;

int main() {
    int* arr = new int[5]; // Allocating memory for an array
    for (int i = 0; i < 5; ++i) {
        arr[i] = i + 1; // Initializing array elements
    }

    for (int i = 0; i < 5; ++i) {
        cout << "Element " << i << ": " << arr[i] << endl;
    }

    delete[] arr; // Deallocating array memory
    arr = nullptr; // Resetting pointer to prevent dangling
    return 0;
}`
        },
        {
            title: "Null Pointers and Dangling Pointers",
            content: "Always reset pointers to `nullptr` after deleting memory to avoid dangling pointers. A dangling pointer points to memory that has already been deallocated, leading to undefined behavior if accessed.",
            code: `#include <iostream>
using namespace std;

int main() {
    int* ptr = new int(10); // Allocate and initialize memory
    cout << "Value: " << *ptr << endl;

    delete ptr; // Deallocate memory
    ptr = nullptr; // Reset pointer to prevent dangling

    if (ptr == nullptr) {
        cout << "Pointer is null, no risk of dangling pointer!" << endl;
    }
    return 0;
}`
        },
        {
            title: "Memory Leaks and Best Practices",
            content: "Memory leaks occur when memory allocated with `new` is not properly deallocated using `delete`. To avoid memory leaks:\n- Always match every `new` with a `delete`.\n- Use smart pointers (like `std::unique_ptr` or `std::shared_ptr`) from the C++ Standard Library to automate memory management.",
            code: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    unique_ptr<int> ptr = make_unique<int>(42); // Automatically managed memory
    cout << "Value: " << *ptr << endl;

    // No need to call delete; memory is automatically released
    return 0;
}`
        },
        {
            title: "Dynamic Memory for Objects",
            content: "Dynamic memory can be used to create objects on the heap. Constructors and destructors ensure proper initialization and cleanup.",
            code: `#include <iostream>
using namespace std;

class Sample {
    int value;
public:
    Sample(int v) : value(v) {
        cout << "Constructor called. Value = " << value << endl;
    }

    ~Sample() {
        cout << "Destructor called. Cleaning up!" << endl;
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Sample* obj = new Sample(100); // Create object dynamically
    obj->display();

    delete obj; // Delete object to call destructor
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that dynamically allocates an array of integers and initializes it with values.",
            hint: "Use `new` to allocate the array and a loop to assign values."
        },
        {
            question: "Implement a function that takes a dynamically allocated integer, modifies its value, and frees the memory.",
            hint: "Ensure to use `delete` after modifying the value."
        },
        {
            question: "Create a program that demonstrates memory leaks by failing to deallocate memory.",
            hint: "Allocate memory without calling `delete`."
        },
        {
            question: "Write a program that uses `new` to create an object of a class and deletes it using `delete`.",
            hint: "Define a constructor and destructor in the class."
        },
        {
            question: "Demonstrate the use of smart pointers (`std::unique_ptr`) to manage dynamically allocated memory automatically.",
            hint: "Use `make_unique` to create the smart pointer."
        },
        {
            question: "Create a class that dynamically allocates memory in its constructor and releases it in its destructor.",
            hint: "Use `new` in the constructor and `delete` in the destructor."
        },
        {
            question: "Write a program that allocates a 2D array dynamically and initializes it with row and column indices.",
            hint: "Use nested loops and `new` to allocate rows and columns."
        },
        {
            question: "Implement a dynamic linked list where each node is dynamically allocated.",
            hint: "Use `new` for node creation and `delete` to free memory when a node is removed."
        }
    ]
},

    'virtual_destructors': {
    title: "Virtual Destructors and Abstract Classes",
    description: "Learn why virtual destructors are essential for proper cleanup in polymorphic base classes and how abstract classes enable polymorphism by defining pure virtual functions in C++.",
    sections: [
        {
            title: "Importance of Virtual Destructors",
            content: "In polymorphic base classes, the destructor should be declared as virtual. This ensures that when an object is deleted through a base class pointer, the derived class destructor is called. Without a virtual destructor, only the base class destructor would be executed, potentially leading to resource leaks.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    Base() {
        cout << "Base constructor called." << endl;
    }
    virtual ~Base() { // Virtual destructor
        cout << "Base destructor called." << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived constructor called." << endl;
    }
    ~Derived() {
        cout << "Derived destructor called." << endl;
    }
};

int main() {
    Base* obj = new Derived(); // Base class pointer to derived object
    delete obj; // Properly calls Derived destructor, then Base destructor
    return 0;
}`
        },
        {
            title: "Abstract Classes",
            content: "An abstract class in C++ is a class that contains at least one pure virtual function. Such a class cannot be instantiated and serves as a base for other classes. Abstract classes define a common interface that derived classes must implement, enabling polymorphism.",
            code: `#include <iostream>
using namespace std;

class Abstract {
public:
    virtual void pureVirtualFunc() = 0; // Pure virtual function
    virtual ~Abstract() {} // Virtual destructor to ensure proper cleanup
};

class Derived1 : public Abstract {
public:
    void pureVirtualFunc() override {
        cout << "Derived1 implementation of pureVirtualFunc." << endl;
    }
};

class Derived2 : public Abstract {
public:
    void pureVirtualFunc() override {
        cout << "Derived2 implementation of pureVirtualFunc." << endl;
    }
};

int main() {
    Abstract* obj1 = new Derived1();
    Abstract* obj2 = new Derived2();

    obj1->pureVirtualFunc(); // Calls Derived1's implementation
    obj2->pureVirtualFunc(); // Calls Derived2's implementation

    delete obj1; // Proper cleanup using virtual destructor
    delete obj2; // Proper cleanup using virtual destructor
    return 0;
}`
        },
        {
            title: "Virtual Destructors in Inheritance Chains",
            content: "In inheritance chains, every destructor in the hierarchy must be virtual to ensure proper cleanup. Failing to declare a destructor as virtual in any base class could result in undefined behavior or resource leaks.",
            code: `#include <iostream>
using namespace std;

class Grandparent {
public:
    virtual ~Grandparent() {
        cout << "Grandparent destructor called." << endl;
    }
};

class Parent : public Grandparent {
public:
    ~Parent() {
        cout << "Parent destructor called." << endl;
    }
};

class Child : public Parent {
public:
    ~Child() {
        cout << "Child destructor called." << endl;
    }
};

int main() {
    Grandparent* obj = new Child();
    delete obj; // Properly calls Child, Parent, and Grandparent destructors in order
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a base class with a virtual destructor and a derived class. Demonstrate proper destruction.",
            hint: "Use base class pointers to delete derived class objects."
        },
        {
            question: "Implement an abstract class and derive multiple classes from it, ensuring each derived class implements the pure virtual function.",
            hint: "Create different behaviors in the derived classes."
        },
        {
            question: "Write a program that demonstrates the need for virtual destructors when using base class pointers.",
            hint: "Show memory cleanup with and without virtual destructors."
        },
        {
            question: "Create an inheritance chain with three levels and demonstrate proper cleanup with virtual destructors.",
            hint: "Ensure all base classes have virtual destructors."
        },
        {
            question: "Write a program to show the polymorphic behavior of an abstract class with multiple derived classes.",
            hint: "Use a pure virtual function in the base class and implement it differently in each derived class."
        },
        {
            question: "Demonstrate what happens when a base class destructor is not virtual, and a derived class object is deleted via a base class pointer.",
            hint: "Observe which destructors are called."
        }
    ]
},

    'polymorphism': {
    title: "Polymorphism and Virtual Functions",
    description: "Learn about polymorphism in C++ and how virtual functions enable runtime polymorphism. Understand how to use base class pointers or references to call derived class methods dynamically.",
    sections: [
        {
            title: "Understanding Polymorphism",
            content: "Polymorphism allows the same interface to represent different underlying forms (data types). In C++, polymorphism enables methods to behave differently based on the object they are acting upon. This is typically achieved through base class pointers or references pointing to derived class objects.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() { // Virtual function for runtime polymorphism
        cout << "Base Display" << endl;
    }
};

class Derived1 : public Base {
public:
    void display() override { // Overriding base class method
        cout << "Derived1 Display" << endl;
    }
};

class Derived2 : public Base {
public:
    void display() override { // Overriding base class method
        cout << "Derived2 Display" << endl;
    }
};

int main() {
    Base* basePtr; // Base class pointer
    Derived1 d1;
    Derived2 d2;

    basePtr = &d1;
    basePtr->display(); // Calls Derived1's display

    basePtr = &d2;
    basePtr->display(); // Calls Derived2's display

    return 0;
}`
        },
        {
            title: "Using Virtual Functions",
            content: "Virtual functions are declared in the base class using the `virtual` keyword. This allows derived classes to provide specific implementations for those functions. When a base class pointer or reference is used to call a method, the derived class's implementation is invoked at runtime.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() {
        cout << "Base class display" << endl;
    }
};

class Derived : public Base {
public:
    void display() override {
        cout << "Derived class display" << endl;
    }
};

int main() {
    Base* obj = new Derived(); // Base pointer to a Derived object
    obj->display(); // Calls Derived's display method due to virtual function
    delete obj; // Proper cleanup
    return 0;
}`
        },
        {
            title: "Static vs. Dynamic Binding",
            content: "Static binding occurs at compile-time and is used for normal function calls, while dynamic binding occurs at runtime for virtual function calls. Polymorphism relies on dynamic binding to select the appropriate method implementation.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    void staticDisplay() {
        cout << "Static Base display" << endl;
    }

    virtual void dynamicDisplay() {
        cout << "Dynamic Base display" << endl;
    }
};

class Derived : public Base {
public:
    void staticDisplay() {
        cout << "Static Derived display" << endl;
    }

    void dynamicDisplay() override {
        cout << "Dynamic Derived display" << endl;
    }
};

int main() {
    Base baseObj;
    Derived derivedObj;

    // Static binding
    baseObj.staticDisplay(); // Calls Base's staticDisplay
    derivedObj.staticDisplay(); // Calls Derived's staticDisplay

    // Dynamic binding
    Base* basePtr = &derivedObj;
    basePtr->dynamicDisplay(); // Calls Derived's dynamicDisplay due to virtual function

    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a base class with a virtual function and derive multiple classes from it, each implementing the virtual function differently.",
            hint: "Demonstrate polymorphic behavior with an array of base class pointers."
        },
        {
            question: "Implement a program that shows how virtual functions facilitate runtime polymorphism.",
            hint: "Use base class pointers to call derived class methods."
        },
        {
            question: "Write a program that illustrates the difference between static and dynamic binding.",
            hint: "Show how method calls differ when using base and derived class pointers."
        },
        {
            question: "Create a virtual function in the base class to calculate the area of a shape, and override it in derived classes like Circle and Rectangle.",
            hint: "Use base class pointers to handle different shape objects."
        },
        {
            question: "Demonstrate polymorphism by creating a base class Animal with a virtual function sound(), and derive classes Dog and Cat.",
            hint: "Call the sound() function using base class pointers for Dog and Cat objects."
        },
        {
            question: "Write a program that uses a pure virtual function in the base class to enforce overriding in derived classes.",
            hint: "Create an abstract class with a pure virtual function."
        }
    ]
},

    'virtual_functions': {
    title: "Pure Virtual Functions and Late Binding",
    description: "Learn about pure virtual functions in C++ and their role in enabling late binding and abstraction. Understand how these concepts contribute to flexible and reusable object-oriented designs.",
    sections: [
        {
            title: "Understanding Pure Virtual Functions",
            content: "A pure virtual function is a function declared in a base class that has no definition. Declaring a pure virtual function makes the base class abstract, meaning it cannot be instantiated. Derived classes must override the pure virtual function to be instantiated. This mechanism enforces a consistent interface across derived classes.",
            code: `#include <iostream>
using namespace std;

class Abstract {
public:
    virtual void doWork() = 0; // Pure virtual function

    virtual ~Abstract() { // Virtual destructor
        cout << "Abstract class destructor called." << endl;
    }
};

class Derived1 : public Abstract {
public:
    void doWork() override { // Override the pure virtual function
        cout << "Derived1 is doing work!" << endl;
    }
};

class Derived2 : public Abstract {
public:
    void doWork() override { // Override the pure virtual function
        cout << "Derived2 is doing work!" << endl;
    }
};

int main() {
    Abstract* obj1 = new Derived1();
    Abstract* obj2 = new Derived2();

    obj1->doWork(); // Calls Derived1's implementation
    obj2->doWork(); // Calls Derived2's implementation

    delete obj1; // Proper cleanup
    delete obj2; // Proper cleanup

    return 0;
}`
        },
        {
            title: "Late Binding",
            content: "Late binding, also known as dynamic dispatch, is a runtime process where the appropriate function is determined based on the actual type of the object. Virtual functions enable late binding, allowing polymorphic behavior in C++.",
            code: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() { // Virtual function for late binding
        cout << "Base class display" << endl;
    }

    virtual ~Base() {
        cout << "Base class destructor called." << endl;
    }
};

class Derived : public Base {
public:
    void display() override { // Overriding the base class method
        cout << "Derived class display" << endl;
    }

    ~Derived() {
        cout << "Derived class destructor called." << endl;
    }
};

int main() {
    Base* obj = new Derived(); // Base class pointer to Derived object
    obj->display(); // Late binding determines Derived's display method is called

    delete obj; // Properly calls destructors in reverse order (Derived, then Base)
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Define an abstract class with a pure virtual function and create derived classes implementing that function.",
            hint: "Show how each derived class provides its unique behavior."
        },
        {
            question: "Write a program demonstrating late binding with virtual functions.",
            hint: "Use an array of base class pointers pointing to derived class objects."
        },
        {
            question: "Implement a scenario where pure virtual functions enforce implementation in derived classes.",
            hint: "Try to instantiate an abstract class to demonstrate the error."
        },
        {
            question: "Create an abstract class representing shapes with a pure virtual function for area calculation. Implement derived classes like Circle and Rectangle.",
            hint: "Override the area function in each derived class with specific calculations."
        },
        {
            question: "Write a program to demonstrate the destruction sequence when using a base class pointer for derived class objects with virtual destructors.",
            hint: "Observe the order of destructor calls in a multilevel inheritance hierarchy."
        },
        {
            question: "Demonstrate late binding by using a virtual function to log events in different derived classes like FileLogger, ConsoleLogger, and NetworkLogger.",
            hint: "Implement a virtual function logEvent() in the base class and override it in each derived class."
        }
    ]
},

    'exception_handling': {
    title: "Basics of Exception Handling",
    description: "Learn the fundamentals of exception handling in C++. Understand how to use try-catch blocks and the `throw` statement to handle runtime errors and create robust programs.",
    sections: [
        {
            title: "What is Exception Handling?",
            content: "Exception handling is a mechanism to handle runtime errors in a controlled way, ensuring the program can continue executing or terminate gracefully. Exceptions are raised when an error occurs, and the program transfers control to the nearest catch block for handling.",
            code: `#include <iostream>
#include <exception>
using namespace std;

int main() {
    try {
        cout << "Trying to execute..." << endl;
        throw runtime_error("Something went wrong!"); // Throwing an exception
    } catch (const exception& e) { // Catching the exception
        cout << "Caught an exception: " << e.what() << endl; // Display the error message
    }
    return 0;
}`
        },
        {
            title: "Throwing Exceptions",
            content: "You can throw exceptions using the `throw` keyword followed by an instance of an exception class or a custom error message. This interrupts the normal flow of execution and transfers control to a catch block.",
            code: `#include <iostream>
#include <stdexcept>
using namespace std;

void divide(int a, int b) {
    if (b == 0) {
        throw invalid_argument("Division by zero is not allowed!"); // Throwing an exception
    }
    cout << "Result: " << a / b << endl;
}

int main() {
    try {
        divide(10, 0); // Attempting division by zero
    } catch (const invalid_argument& e) { // Handling the specific exception
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`
        },
        {
            title: "Catching Exceptions",
            content: "Catch blocks allow you to define how to respond to specific exceptions. You can have multiple catch blocks to handle different types of exceptions. Always catch exceptions by reference to avoid slicing.",
            code: `#include <iostream>
#include <stdexcept>
using namespace std;

void process(int value) {
    if (value < 0) {
        throw invalid_argument("Negative value provided!");
    } else if (value == 0) {
        throw runtime_error("Value cannot be zero!");
    }
}

int main() {
    try {
        process(-1); // Will throw an invalid_argument exception
    } catch (const invalid_argument& e) {
        cout << "Invalid argument exception: " << e.what() << endl;
    } catch (const runtime_error& e) {
        cout << "Runtime error: " << e.what() << endl;
    } catch (const exception& e) { // Catching any other exceptions
        cout << "General exception: " << e.what() << endl;
    }
    return 0;
}`
        },
        {
            title: "Custom Exception Classes",
            content: "You can define your own exception classes by inheriting from `std::exception`. Override the `what()` method to provide a custom error message.",
            code: `#include <iostream>
#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const noexcept override { // Overriding the what() method
        return "Custom exception occurred!";
    }
};

int main() {
    try {
        throw MyException(); // Throwing a custom exception
    } catch (const MyException& e) { // Catching the custom exception
        cout << e.what() << endl;
    }
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that throws an exception for a division by zero error.",
            hint: "Use the `throw` statement to handle the division operation."
        },
        {
            question: "Implement a function that catches different exceptions and displays a message based on the exception type.",
            hint: "Use multiple catch blocks for different exception types."
        },
        {
            question: "Create a class that handles file operations and throws exceptions for file not found or permission errors.",
            hint: "Define custom exceptions for your file handling."
        },
        {
            question: "Write a program to demonstrate rethrowing an exception inside a catch block.",
            hint: "Use the `throw;` statement inside a catch block to rethrow the caught exception."
        },
        {
            question: "Implement a function that calculates the square root of a number and throws an exception if the input is negative.",
            hint: "Use a custom exception class for negative values."
        },
        {
            question: "Create a program that uses a base class pointer to catch exceptions thrown by derived exception classes.",
            hint: "Use polymorphism to handle exceptions in a hierarchy."
        }
    ]
},

    'templates': {
    title: "Function and Class Templates",
    description: "Learn about templates in C++, which allow you to create generic functions and classes that can operate on different data types. Templates enable code reuse and type safety, making them a powerful tool in generic programming.",
    sections: [
        {
            title: "Understanding Function Templates",
            content: "Function templates allow you to define a single function that works with different data types. The compiler generates the appropriate function definition based on the type of arguments passed when the function is called.",
            code: `#include <iostream>
using namespace std;

// Template for a generic add function
template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << "Addition of integers: " << add(5, 10) << endl;    // Calls add<int>
    cout << "Addition of doubles: " << add(5.5, 10.1) << endl; // Calls add<double>
    return 0;
}`
        },
        {
            title: "Creating Class Templates",
            content: "Class templates allow you to create a blueprint for classes that can work with any data type. The type is specified when an object of the template class is instantiated.",
            code: `#include <iostream>
using namespace std;

// Template for a generic Box class
template <typename T>
class Box {
public:
    T value;

    Box(T v) : value(v) {}

    void display() {
        cout << "Box value: " << value << endl;
    }
};

int main() {
    Box<int> intBox(10);      // Box for integers
    Box<double> doubleBox(5.5); // Box for doubles

    intBox.display();
    doubleBox.display();

    return 0;
}`
        },
        {
            title: "Specializing Templates",
            content: "Template specialization allows you to provide a specific implementation of a template for a particular data type. This is useful when a type requires a behavior different from the generic implementation.",
            code: `#include <iostream>
using namespace std;

// Generic Box template
template <typename T>
class Box {
public:
    T value;
    Box(T v) : value(v) {}
    void display() {
        cout << "Box value: " << value << endl;
    }
};

// Specialization for int type
template <>
class Box<int> {
public:
    int value;
    Box(int v) : value(v) {}
    void display() {
        cout << "Specialized Box for int with value: " << value << endl;
    }
};

int main() {
    Box<string> stringBox("Hello");
    Box<int> intBox(42); // Uses specialized implementation

    stringBox.display();
    intBox.display();

    return 0;
}`
        },
        {
            title: "Template Functions with Multiple Parameters",
            content: "You can define templates with multiple parameters to handle functions or classes requiring multiple types.",
            code: `#include <iostream>
using namespace std;

// Template with two parameters
template <typename T1, typename T2>
void printPair(T1 first, T2 second) {
    cout << "Pair: (" << first << ", " << second << ")" << endl;
}

int main() {
    printPair(10, "Hello");       // T1 = int, T2 = const char*
    printPair(3.14, true);        // T1 = double, T2 = bool
    return 0;
}`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a function template that swaps two variables of any type.",
            hint: "Use a template parameter for the function."
        },
        {
            question: "Define a class template for a simple stack that can hold any data type.",
            hint: "Implement push and pop functions."
        },
        {
            question: "Implement a function template that finds the maximum of three values of any type.",
            hint: "Use conditional statements to compare the values."
        },
        {
            question: "Write a program using a class template to represent a generic Pair, holding two values of potentially different types.",
            hint: "Use two template parameters."
        },
        {
            question: "Create a specialized implementation of a function template for the `string` type that reverses the string.",
            hint: "Use `template<>` for specialization."
        },
        {
            question: "Design a generic queue class using a class template. Implement enqueue and dequeue operations.",
            hint: "Use an array or vector for internal storage."
        },
        {
            question: "Write a program that demonstrates the use of template functions to perform mathematical operations like addition, subtraction, and multiplication.",
            hint: "Define one template function with a parameter for the operation type."
        }
    ]
},
    'stl_intro': {
        title: "Introduction to Standard Template Library",
        description: "Get introduced to the Standard Template Library (STL) in C++. Understand the components of STL and its advantages in programming.",
        sections: [
            {
                title: "What is STL?",
                content: "The Standard Template Library is a powerful set of C++ template classes that provides general-purpose classes and functions with templates for data structures and algorithms.",
                code: `#include <vector>
    #include <algorithm>`
            },
            {
                title: "Components of STL",
                content: "STL consists of algorithms, containers, and iterators. Containers are data structures, algorithms are operations on containers, and iterators allow traversal of container elements.",
                code: `std::vector<int> vec;  // Container example`
            },
            {
                title: "Advantages of Using STL",
                content: "STL provides ready-to-use classes and functions that save development time, increase code reliability, and offer efficient performance for common tasks.",
                code: `std::sort(vec.begin(), vec.end());  // Algorithm example`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a simple program that demonstrates the use of the vector container to store and display integers.",
                hint: "Use vector methods like push_back() and size()."
            },
            {
                question: "Implement a program that sorts an array of integers using STL algorithms.",
                hint: "Use std::sort() to sort the array."
            },
            {
                question: "Write a program that uses STL iterators to traverse and print elements of a list.",
                hint: "Use list::iterator for traversal."
            }
        ]
    },
     
    'stl_containers': {
    title: "Using STL Containers - Vector, List, and Other Containers",
    description: "Dive deep into the Standard Template Library (STL) by exploring vector, list, and other commonly used containers like deque, set, and map. Learn their features, use cases, and key operations for efficient data management.",
    sections: [
        {
            title: "Working with Vectors",
            content: "Vectors are dynamic arrays that can resize automatically. They provide random access to elements and efficient insertion and deletion at the end. Vectors are stored contiguously in memory, making them compatible with algorithms that require array-like structures.",
            code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3}; // Initializing a vector
    vec.push_back(4);           // Adding an element at the end
    vec.pop_back();             // Removing the last element

    cout << "Vector elements: ";
    for (int val : vec) {
        cout << val << " "; // Accessing elements
    }
    cout << endl;

    cout << "Size of vector: " << vec.size() << endl; // Getting size
    return 0;
}`
        },
        {
            title: "Working with Lists",
            content: "Lists in the STL are implemented as doubly linked lists, allowing efficient insertion and deletion at both ends and any position. However, they do not support random access, and accessing elements requires traversal.",
            code: `#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> lst = {1, 2, 3}; // Initializing a list
    lst.push_back(4);          // Adding an element at the end
    lst.push_front(0);         // Adding an element at the front
    lst.pop_back();            // Removing the last element
    lst.pop_front();           // Removing the first element

    cout << "List elements: ";
    for (int val : lst) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}`
        },
        {
            title: "Working with Deques",
            content: "Deques (double-ended queues) allow fast insertion and deletion at both ends. They are a hybrid between vectors and lists, providing flexibility for both random access and dynamic resizing at either end.",
            code: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq = {1, 2, 3}; // Initializing a deque
    dq.push_back(4);           // Adding an element at the end
    dq.push_front(0);          // Adding an element at the front
    dq.pop_back();             // Removing the last element
    dq.pop_front();            // Removing the first element

    cout << "Deque elements: ";
    for (int val : dq) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}`
        },
        {
            title: "Working with Sets",
            content: "Sets store unique elements in sorted order. They provide efficient insertion, deletion, and lookup operations, making them suitable for maintaining collections of unique items.",
            code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {3, 1, 4, 1, 5}; // Initializing a set
    s.insert(2);                  // Adding an element
    s.erase(4);                   // Removing an element

    cout << "Set elements: ";
    for (int val : s) {
        cout << val << " "; // Elements are stored in sorted order
    }
    cout << endl;

    cout << "Does the set contain 3? " << (s.count(3) ? "Yes" : "No") << endl;
    return 0;
}`
        },
        {
            title: "Working with Maps",
            content: "Maps store key-value pairs, where keys are unique and values are associated with those keys. They are implemented as balanced binary search trees, providing efficient lookup, insertion, and deletion operations.",
            code: `#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> m; // Initializing a map
    m["Alice"] = 25;    // Adding key-value pairs
    m["Bob"] = 30;

    m.insert({"Charlie", 35}); // Inserting another key-value pair

    cout << "Map elements:" << endl;
    for (const auto& pair : m) {
        cout << pair.first << ": " << pair.second << endl; // Accessing keys and values
    }

    m.erase("Bob"); // Removing an element by key
    cout << "After erasing Bob, map size: " << m.size() << endl;

    return 0;
}`
        },
        {
            title: "Choosing Between Containers",
            content: "Each STL container has its strengths and is suited for specific scenarios:\n- **Vector**: Use for random access and dynamic resizing at the end.\n- **List**: Use when frequent insertion and deletion in the middle are required.\n- **Deque**: Use when you need efficient insertion and deletion at both ends.\n- **Set**: Use for maintaining unique elements in sorted order.\n- **Map**: Use for key-value associations with unique keys."
        }
    ],
    practiceQuestions: [
        {
            question: "Create a program that demonstrates adding and removing elements from a vector.",
            hint: "Use push_back() and pop_back() methods."
        },
        {
            question: "Implement a program that shows the differences in performance between vector and list when inserting elements.",
            hint: "Measure time taken for various operations."
        },
        {
            question: "Write a program that initializes a list with values and removes duplicates.",
            hint: "Use unique() in combination with list::erase()."
        },
        {
            question: "Write a program to manage a set of unique student IDs using a set. Demonstrate insertion and deletion of IDs.",
            hint: "Use set::insert() and set::erase()."
        },
        {
            question: "Create a map to store the names and scores of students. Add, modify, and delete entries.",
            hint: "Use map::insert(), map::operator[], and map::erase()."
        },
        {
            question: "Design a generic queue using a deque. Implement enqueue and dequeue operations.",
            hint: "Use deque::push_back() and deque::pop_front()."
        },
        {
            question: "Write a program that reads a sequence of numbers and counts their frequency using a map.",
            hint: "Use map<int, int> to store the frequency of each number."
        }
    ]
},

};