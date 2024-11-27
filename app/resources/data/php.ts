export const units = [
    {
        title: "Unit I: PHP Fundamentals",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=0s",
        quizlink: "",
        lessons: [
            { name: "PHP, MySQL, and XAMPP Installation", lessonkey: "php_mysql_xampp_installation" },
            { name: "PHP Basic Syntax", lessonkey: "php_basic_syntax" },
            { name: "PHP Data Types", lessonkey: "php_data_types" },
            { name: "PHP Variables", lessonkey: "php_variables" },
            { name: "PHP Constants", lessonkey: "php_constants" },
            { name: "PHP Expressions and Operators", lessonkey: "php_expressions_operators" },
            { name: "PHP Control Structures", lessonkey: "php_control_structures" },
            { name: "PHP Loops", lessonkey: "php_loops" }
        ]
    },
    {
        title: "Unit II: PHP Arrays and Functions",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=3620s",
        quizlink: "",
        lessons: [
            { name: "PHP Enumerated Arrays", lessonkey: "php_enumerated_arrays" },
            { name: "PHP Associative Arrays", lessonkey: "php_associative_arrays" },
            { name: "PHP Multi-Dimensional Arrays", lessonkey: "php_multidimensional_arrays" },
            { name: "PHP Functions: Syntax and Arguments", lessonkey: "php_functions_syntax" },
            { name: "Pass by Value & Reference", lessonkey: "php_pass_by_value_reference" },
            { name: "PHP Variable Scope", lessonkey: "php_variable_scope" },
            { name: "Using PHP include() and require()", lessonkey: "php_include_require" }
        ]
    },
    {
        title: "Unit III: PHP Forms",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=7740s",
        quizlink: "",
        lessons: [
            { name: "PHP Form Handling", lessonkey: "php_form_handling" },
            { name: "PHP GET and POST", lessonkey: "php_get_post" },
            { name: "PHP Form Validation", lessonkey: "php_form_validation" },
            { name: "PHP Form Sanitization", lessonkey: "php_form_sanitization" }
        ]
    },
    {
        title: "Unit IV: PHP Cookies, Sessions, and String Handling",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=9490s",
        quizlink: "",
        lessons: [
            { name: "PHP Cookie Handling", lessonkey: "php_cookie_handling" },
            { name: "PHP Session Handling", lessonkey: "php_session_handling" },
            { name: "PHP Login Session", lessonkey: "php_login_session" },
            { name: "String Patterns and Matching", lessonkey: "php_string_patterns" },
            { name: "PHP Sending Emails", lessonkey: "php_sending_emails" },
            { name: "PHP File Uploading", lessonkey: "php_file_uploading" },
            { name: "PHP Filters and Error Handling", lessonkey: "php_filters_error_handling" }
        ]
    },
    {
        title: "Unit V: Object-Oriented Programming in PHP",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=18553s",
        quizlink: "",
        lessons: [
            { name: "Defining PHP Classes", lessonkey: "php_classes" },
            { name: "Creating and Using Objects", lessonkey: "php_objects" },
            { name: "Calling Member Functions", lessonkey: "php_member_functions" },
            { name: "Constructor Functions", lessonkey: "php_constructor_functions" },
            { name: "Inheritance and Function Overriding", lessonkey: "php_inheritance" },
            { name: "PHP Interfaces and Abstract Classes", lessonkey: "php_interfaces_abstract" }
        ]
    },
    {
        title: "Unit VI: Basic MySQL and SQL Queries",
        youtube: "https://www.youtube.com/watch?v=t0syDUSbdfE&t=21054s",
        quizlink: "",
        lessons: [
            { name: "Database Basics", lessonkey: "mysql_database_basics" },
            { name: "Using PHPMyAdmin", lessonkey: "phpmyadmin" },
            { name: "Connecting to MySQL with PHP", lessonkey: "mysql_connect" },
            { name: "MySQL CRUD Operations", lessonkey: "mysql_crud_operations" },
            { name: "Using WHERE, Order By, and Group By", lessonkey: "mysql_where_orderby_groupby" },
            { name: "SQL Aggregate Functions", lessonkey: "sql_aggregate_functions" }
        ]
    }
];


export const lessonData = {
    "php_mysql_xampp_installation": {
    "title": "PHP, MySQL, and XAMPP Installation",
    "description": "Learn to set up PHP and MySQL on your computer using XAMPP, a cross-platform server solution that includes Apache and MariaDB.",
    "sections": [
        {
            "title": "Installing XAMPP",
            "content": "XAMPP is an all-in-one server solution for setting up a local environment for PHP and MySQL development. Download XAMPP from https://www.apachefriends.org and follow the installation instructions. During setup, choose the components you need such as Apache, MySQL, and PHP.",
            "points": [
                "XAMPP is available for Windows, macOS, and Linux.",
                "Ensure you select Apache, MySQL, PHP, and phpMyAdmin during installation."
            ],
            "code": `
1. Go to https://www.apachefriends.org and download the latest version of XAMPP for your operating system.
2. Run the installer and follow the installation prompts.
3. Choose the required components (e.g., Apache, MySQL, PHP, phpMyAdmin).
4. Complete the installation and open the XAMPP Control Panel.
            `
        },
        {
            "title": "Running XAMPP and Setting Up PHP",
            "content": "After installing XAMPP, open the XAMPP Control Panel. Start the Apache and MySQL modules to set up your local server. This environment allows PHP files to run and databases to function locally.",
            "points": [
                "Apache is the web server required to host PHP applications locally.",
                "MySQL is used for managing databases. It is started alongside Apache for database integration.",
                "Place PHP files in the `htdocs` folder inside the XAMPP installation directory for them to be accessible via the browser."
            ],
            "code": `
1. Open the XAMPP Control Panel from your installation directory.
2. Click 'Start' next to Apache to start the web server.
3. Click 'Start' next to MySQL to start the database server.
4. Place your PHP files in the 'htdocs' folder (e.g., C:/xampp/htdocs/).
5. Ensure both Apache and MySQL show a green status indicator in the Control Panel.
6. If ports are blocked, check for conflicting applications (e.g., Skype) and change the ports in the XAMPP settings.
            `
        },
        {
            "title": "Testing the PHP Installation",
            "content": "Create a simple PHP file to ensure your setup is working correctly. Use the code below to verify PHP installation:",
            "code": `
1. Navigate to the 'htdocs' folder in your XAMPP directory.
2. Create a file named 'index.php' with the following content:
   <?php echo "Hello, PHP!"; ?>
3. Open your browser and visit 'http://localhost/index.php'.
4. You should see the output: 'Hello, PHP!'
            `
        }
    ],
    "pitfalls": [
        "Ensure Apache and MySQL are running in XAMPP when testing PHP and database connections.",
        "If `localhost` does not work, try using the IP address `127.0.0.1`.",
        "Watch for port conflicts with other applications like Skype or IIS."
    ],
    "summary": "XAMPP provides a local development environment for PHP applications and MySQL databases. Setting up XAMPP, starting Apache and MySQL, and testing with a simple PHP file ensures a smooth development process.",
    "practiceQuestions": [
        {
            "question": "Download XAMPP and run Apache and MySQL on your system.",
            "hint": "Go to the Control Panel and start Apache and MySQL."
        },
        {
            "question": "Create a simple PHP file to display 'Hello, PHP!' in your browser.",
            "hint": "Use the `echo` function in PHP."
        },
        {
            "question": "Explain the purpose of the `htdocs` folder in XAMPP.",
            "hint": "Think about where PHP files are placed to be accessible through the local server."
        }
    ]
},
"php_basic_syntax": {
    "title": "PHP Basic Syntax",
    "description": "Understand the basic syntax of PHP, including opening and closing tags, and using `echo` to display text.",
    "sections": [
        {
            "title": "PHP Opening and Closing Tags",
            "content": "PHP code should be written inside `<?php ... ?>` tags. These tags tell the server to interpret the enclosed code as PHP.",
            "points": [
                "The opening tag is `<?php`, and the closing tag is `?>`.",
                "PHP can be embedded within HTML to create dynamic content.",
                "Always ensure proper use of PHP tags to avoid parsing issues."
            ],
            "code": `
1. Basic PHP script:
   <?php
   echo "This is PHP code.";
   ?>

2. PHP inside HTML:
   <html>
   <body>
       <h1><?php echo "Dynamic Heading"; ?></h1>
   </body>
   </html>
            `
        },
        {
            "title": "Using `echo` to Display Output",
            "content": "`echo` is a PHP command used to display text or variables in the browser. It is one of the most commonly used commands for outputting content.",
            "points": [
                "The `echo` command outputs strings, numbers, or variables.",
                "Strings must be enclosed in single or double quotes.",
                "Multiple values can be displayed using commas or concatenation."
            ],
            "code": `
1. Outputting text:
   <?php
   echo "Hello, World!";
   ?>

2. Using variables:
   <?php
   $greeting = "Hello, PHP!";
   echo $greeting;
   ?>

3. Concatenating strings:
   <?php
   echo "Hello, " . "World!";
   ?>
            `
        }
    ],
    "pitfalls": [
        "Ensure PHP tags are properly closed to avoid syntax errors.",
        "Always end PHP statements with a semicolon (`;`).",
        "Mismatched quotes in strings will result in syntax errors."
    ],
    "summary": "Basic PHP syntax includes using PHP tags (`<?php ... ?>`) to define PHP code and the `echo` function to output text or variables to the browser. This foundation allows for creating dynamic web pages.",
    "practiceQuestions": [
        {
            "question": "Write a PHP script to display 'Welcome to PHP!'",
            "hint": "Use `echo` with a string inside the PHP tags."
        },
        {
            "question": "How would you embed a PHP variable inside an HTML paragraph?",
            "hint": "Use PHP tags and the `echo` function within the HTML."
        },
        {
            "question": "Write a PHP script to concatenate 'Hello' and 'World!' and display the result.",
            "hint": "Use the concatenation operator (`.`) with `echo`."
        }
    ]
},
   "php_data_types": {
    "title": "PHP Data Types",
    "description": "Learn about different data types in PHP, including strings, integers, floats, booleans, arrays, objects, and NULL, and how to use them effectively.",
    "sections": [
        {
            "title": "Overview of PHP Data Types",
            "content": "PHP supports a variety of data types that allow developers to handle different kinds of information in their programs. These data types include:",
            "points": [
                "String: Used to store sequences of characters.",
                "Integer: Represents whole numbers, both positive and negative.",
                "Float (or Double): Represents numbers with decimal points.",
                "Boolean: Stores either `true` or `false` values.",
                "Array: Stores multiple values in a single variable.",
                "Object: Used to store instances of classes.",
                "NULL: Represents a variable with no value or one that has been unset."
            ]
        },
        {
            "title": "Examples of Common Data Types",
            "content": "Below are examples of the most commonly used data types in PHP and how to declare them.",
            "code": `
<?php
// Example 1: String
// Step 1: Declare a variable and assign a string value.
$string = "Hello, World!";
// Step 2: Output the string.
echo $string; // Output: Hello, World!

// Example 2: Integer
// Step 1: Declare a variable and assign an integer value.
$integer = 42;
// Step 2: Output the integer.
echo $integer; // Output: 42

// Example 3: Float
// Step 1: Declare a variable and assign a float value.
$float = 3.14;
// Step 2: Output the float.
echo $float; // Output: 3.14

// Example 4: Boolean
// Step 1: Declare a boolean variable.
$boolean = true;
// Step 2: Output the boolean.
echo $boolean ? 'True' : 'False'; // Output: True

// Example 5: NULL
// Step 1: Declare a variable with NULL value.
$nullValue = NULL;
// Step 2: Use var_dump to inspect the NULL variable.
var_dump($nullValue); // Output: NULL
?>
            `
        },
        {
            "title": "Advanced Data Types: Arrays and Objects",
            "content": "In addition to basic types, PHP supports complex types like arrays and objects, which allow for more advanced data handling.",
            "code": `
<?php
// Example 1: Indexed Array
// Step 1: Declare an indexed array with values.
$fruits = array("apple", "banana", "cherry");
// Step 2: Output a specific value by index.
echo $fruits[0]; // Output: apple

// Example 2: Associative Array
// Step 1: Declare an associative array with key-value pairs.
$person = array("name" => "John", "age" => 30);
// Step 2: Output a specific value by key.
echo $person["name"]; // Output: John

// Example 3: Object
// Step 1: Create a class with properties and methods.
class Car {
    public $make;
    public $model;

    public function __construct($make, $model) {
        $this->make = $make;
        $this->model = $model;
    }
}
// Step 2: Create an object instance and assign values.
$car = new Car("Toyota", "Corolla");
// Step 3: Access and output object properties.
echo $car->make; // Output: Toyota
?>
            `
        }
    ],
    "pitfalls": [
        "Avoid using incompatible data types in expressions, as PHP will attempt to convert them, which may lead to unexpected results.",
        "PHP is a loosely typed language, meaning it does not require explicit type declaration. Be mindful of this when performing operations on variables.",
        "Be cautious with `NULL` values as they can behave differently in comparisons and conditional statements."
    ],
    "summary": "PHP supports a wide range of data types, including basic types like strings and integers, as well as advanced types like arrays and objects. Understanding how to declare and manipulate these types is crucial for effective programming.",
    "practiceQuestions": [
        {
            "question": "Create a variable to store your age as an integer and display it.",
            "hint": "Declare a variable using `$` and assign an integer value."
        },
        {
            "question": "Write a PHP script to declare an indexed array of three colors and display the second color.",
            "hint": "Use the `array` function and access elements using their index."
        },
        {
            "question": "Create an object for a `Book` class with `title` and `author` properties, and display the title.",
            "hint": "Define a class with a constructor and instantiate it with values."
        }
    ]
},
  "php_variables": {
    "title": "PHP Variables",
    "description": "Learn how to declare and use variables in PHP, including naming rules, initialization, and variable scope.",
    "sections": [
        {
            "title": "Declaring Variables in PHP",
            "content": "Variables in PHP are used to store data, which can then be used throughout the script. Variables are declared with the `$` symbol followed by a name. Variable names must follow specific naming rules:",
            "points": [
                "Variable names must start with a letter or an underscore (`_`).",
                "Subsequent characters can be letters, numbers, or underscores.",
                "Variable names are case-sensitive."
            ],
            "code": `<?php
// Declare variables
$name = "John Doe"; // String variable
$age = 30; // Integer variable
$price = 99.99; // Float variable
$isAvailable = true; // Boolean variable

// Display variables
echo "Name: $name, Age: $age, Price: $price, Available: $isAvailable";
?>
`
        },
        {
            "title": "Variable Scope",
            "content": "The scope of a variable determines where it can be accessed in your script. PHP has three main variable scopes:",
            "points": [
                "Local: Variables declared within a function are only accessible inside that function.",
                "Global: Variables declared outside any function can be accessed globally using the `global` keyword inside functions.",
                "Static: Static variables retain their values across function calls and are not reinitialized."
            ],
            "code": `<?php
// Global scope
$globalVar = "Global Variable";

function testGlobalScope() {
    global $globalVar; // Access global variable
    echo $globalVar;
}
testGlobalScope(); // Output: Global Variable

function staticExample() {
    static $count = 0; // Retain value across function calls
    $count++;
    echo $count;
}

staticExample(); // Output: 1
staticExample(); // Output: 2
?>
`
        },
        {
            "title": "Dynamic Variable Names",
            "content": "PHP allows creating dynamic variable names by using a variable as the name of another variable. While this is possible, it should be used cautiously as it can make code harder to read and maintain.",
            "code": `<?php
$variableName = "dynamicVar";
$$variableName = "I am dynamic!";
echo $dynamicVar; // Output: I am dynamic!
?>
`
        }
    ],
    "pitfalls": [
        "Variable names are case-sensitive, so `$name` and `$Name` are treated as different variables.",
        "Using undeclared variables can lead to warnings or unexpected behavior.",
        "Overusing global variables can make debugging difficult; prefer local variables or pass variables explicitly to functions."
    ],
    "summary": "PHP variables are declared with the `$` symbol and can store various data types. Understanding naming rules and variable scope is essential for writing clean, maintainable code.",
    "practiceQuestions": [
        {
            "question": "Declare a variable to store your age and print it.",
            "hint": "Use `$age = 25;` then echo the variable."
        },
        {
            "question": "Use a global variable inside a function and modify its value.",
            "hint": "Declare the variable outside and use `global` inside the function."
        },
        {
            "question": "Write a function that uses a static variable to count how many times it has been called.",
            "hint": "Use `static` to retain the variable's value across calls."
        },
        {
            "question": "Explain the difference between global and local variables in PHP.",
            "hint": "Think about where the variables are declared and accessed."
        }
    ]
},
   "php_constants": {
    "title": "PHP Constants",
    "description": "Learn how to declare, use, and manage constants in PHP. Constants are immutable values that do not change during the execution of a script, making them ideal for defining configuration values or other fixed information.",
    "sections": [
        {
            "title": "Defining Constants",
            "content": "Constants in PHP are defined using the `define()` function or the `const` keyword. Once a constant is set, its value cannot be changed. Constants are commonly used to store configuration values or fixed information like database credentials or site settings.",
            "points": [
                "Constants are case-sensitive by default, but you can make them case-insensitive by passing `true` as the third argument in `define()`.",
                "The `const` keyword can only be used at the top-level scope, while `define()` can be used within conditional blocks or functions.",
                "Constants do not use the `$` symbol and are accessed directly by their name."
            ],
            "code": `
<?php
// Using define()
define("SITE_NAME", "My Awesome Website");
echo SITE_NAME; // Output: My Awesome Website

// Case-insensitive constant
define("GREETING", "Hello, World!", true);
echo greeting; // Output: Hello, World!

// Using const (Top-level only)
const AUTHOR = "John Doe";
echo AUTHOR; // Output: John Doe
?>
            `
        },
        {
            "title": "Advantages of Using Constants",
            "content": "Constants are widely used for values that remain the same throughout the script execution. They provide several advantages:",
            "points": [
                "Immutability: Constants cannot be modified, ensuring consistent values.",
                "Global Scope: Constants are accessible throughout the script, regardless of where they are defined.",
                "Readability: Constants make code easier to read and understand by replacing magic numbers or hardcoded values with meaningful names.",
                "Performance: Accessing constants is faster than variables as they are optimized for lookup."
            ]
        },
        {
            "title": "Using Constants in Arrays (PHP 7.0+)",
            "content": "From PHP 7.0 onwards, constants can be used as part of arrays, making them even more versatile for managing structured data.",
            "code": `
<?php
const DATABASE_CONFIG = [
    'host' => 'localhost',
    'user' => 'root',
    'password' => 'password123',
    'db_name' => 'my_database'
];

echo DATABASE_CONFIG['host']; // Output: localhost
?>
            `
        },
        {
            "title": "Predefined Constants in PHP",
            "content": "PHP provides several predefined constants that are available by default. These constants offer useful information about the PHP environment and script execution.",
            "points": [
                "__LINE__: The current line number in the script.",
                "__FILE__: The full path and filename of the file.",
                "__DIR__: The directory of the file.",
                "__FUNCTION__: The name of the current function.",
                "__CLASS__: The name of the current class."
            ],
            "code": `
<?php
echo "Current Line: " . __LINE__ . "\\n"; // Output: Current Line: (line number)
echo "Current File: " . __FILE__ . "\\n"; // Output: Full file path
echo "Current Directory: " . __DIR__ . "\\n"; // Output: Directory path
?>
            `
        }
    ],
    "pitfalls": [
        "Constants are global and accessible everywhere in the script, so use unique and meaningful names to avoid conflicts.",
        "Unlike variables, constants cannot be unset or redefined, so ensure you initialize them correctly.",
        "The `const` keyword can only be used for scalar values and arrays, whereas `define()` can be used for other data types like resources."
    ],
    "summary": "Constants in PHP are immutable and globally accessible, making them ideal for storing fixed values like configuration settings. They improve readability and performance and can be defined using either `define()` or the `const` keyword.",
    "practiceQuestions": [
        {
            "question": "Define a constant for the name of your website and display it.",
            "hint": "Use `define()` to set and `echo` to display it."
        },
        {
            "question": "Write a script to use a constant array to store database connection details and display the host.",
            "hint": "Use the `const` keyword to define an array and access it using its key."
        },
        {
            "question": "List three predefined constants in PHP and explain their usage.",
            "hint": "Think about constants that give information about the current script."
        },
        {
            "question": "Explain the difference between `define()` and `const` in PHP.",
            "hint": "Consider their usage contexts and flexibility."
        }
    ]
},
     "php_expressions_operators": {
    "title": "PHP Expressions and Operators",
    "description": "Explore expressions and operators in PHP, including arithmetic, assignment, comparison, logical, and other types of operators for handling calculations, value assignments, and decision-making.",
    "sections": [
        {
            "title": "Arithmetic Operators",
            "content": "Arithmetic operators allow you to perform basic mathematical operations such as addition, subtraction, multiplication, division, and modulus.",
            "points": [
                "`+`: Adds two numbers.",
                "`-`: Subtracts the second number from the first.",
                "`*`: Multiplies two numbers.",
                "`/`: Divides the first number by the second.",
                "`%`: Returns the remainder of division."
            ],
            "code": `
<?php
// Arithmetic Operations
$a = 10;
$b = 5;

$sum = $a + $b; // Addition
$difference = $a - $b; // Subtraction
$product = $a * $b; // Multiplication
$quotient = $a / $b; // Division
$remainder = $a % $b; // Modulus

// Output results
echo "Sum: $sum, Difference: $difference, Product: $product, Quotient: $quotient, Remainder: $remainder";
?>
            `
        },
        {
            "title": "Assignment and Comparison Operators",
            "content": "Assignment operators assign values to variables, while comparison operators compare two values and return a boolean (`true` or `false`).",
            "points": [
                "Assignment Operators:",
                "   `=`: Assigns the value to a variable.",
                "   `+=`: Adds a value to the variable and assigns the result.",
                "   `-=`: Subtracts a value from the variable and assigns the result.",
                "Comparison Operators:",
                "   `==`: Checks if two values are equal.",
                "   `===`: Checks if two values are equal and of the same type.",
                "   `!=`: Checks if two values are not equal.",
                "   `!==`: Checks if two values are not equal or not of the same type."
            ],
            "code": `
<?php
// Assignment Operators
$x = 10;
$x += 5; // $x is now 15
$x -= 3; // $x is now 12

// Comparison Operators
$y = 20;
echo $y == 20 ? "Equal\\n" : "Not Equal\\n"; // Output: Equal
echo $y === "20" ? "Identical\\n" : "Not Identical\\n"; // Output: Not Identical
?>
            `
        },
        {
            "title": "Logical Operators",
            "content": "Logical operators are used to evaluate two or more conditions and return a boolean result. They include:",
            "points": [
                "`&&` (and): Returns `true` if both conditions are true.",
                "`||` (or): Returns `true` if at least one condition is true.",
                "`!` (not): Inverts the boolean value of a condition."
            ],
            "code": `
<?php
$a = true;
$b = false;

// Logical Operations
echo ($a && $b) ? "Both True\\n" : "Not Both True\\n"; // Output: Not Both True
echo ($a || $b) ? "At Least One True\\n" : "None True\\n"; // Output: At Least One True
echo !$a ? "Not True\\n" : "True\\n"; // Output: True
?>
            `
        },
        {
            "title": "Other Useful Operators",
            "content": "PHP includes additional operators for specific purposes:",
            "points": [
                "Increment/Decrement Operators: `++` and `--` are used to increase or decrease a variable's value by one.",
                "Ternary Operator: `condition ? value_if_true : value_if_false` is a shorthand for if-else statements.",
                "Null Coalescing Operator (`??`): Returns the first non-null value in a sequence."
            ],
            "code": `
<?php
// Increment and Decrement
$count = 5;
$count++; // Increment: $count is now 6
$count--; // Decrement: $count is now 5

// Ternary Operator
$isEven = ($count % 2 == 0) ? "Even" : "Odd";
echo $isEven; // Output: Odd

// Null Coalescing Operator
$name = null;
echo $name ?? "Default Name"; // Output: Default Name
?>
            `
        }
    ],
    "pitfalls": [
        "Operator precedence can cause unexpected results. Use parentheses to group expressions and clarify the order of operations.",
        "Avoid using `==` for comparisons if type matters. Use `===` for strict equality checks.",
        "Division by zero using `/` or `%` will cause runtime errors."
    ],
    "summary": "PHP operators enable performing arithmetic, assignment, comparison, and logical operations efficiently. Understanding their behavior and precedence is crucial for writing clear and bug-free code.",
    "practiceQuestions": [
        {
            "question": "Create an expression to add two numbers and compare if the result is greater than a third number.",
            "hint": "Use both arithmetic and comparison operators."
        },
        {
            "question": "Write a script to check if a number is even or odd using the modulus operator.",
            "hint": "Use `$number % 2 == 0` to check for even numbers."
        },
        {
            "question": "Combine two conditions using logical operators and return a boolean result.",
            "hint": "Use `&&` or `||` to combine conditions."
        },
        {
            "question": "Demonstrate the use of the ternary operator to assign a value based on a condition.",
            "hint": "Use `condition ? value_if_true : value_if_false` format."
        },
        {
            "question": "What is the difference between `==` and `===` in PHP?",
            "hint": "Think about value equality versus type equality."
        }
    ]
},
    "php_control_structures": {
    "title": "PHP Control Structures",
    "description": "Dive into PHP control structures, including conditional statements (`if`, `elseif`, `else`), the `switch` statement, and loops for controlling program flow.",
    "sections": [
        {
            "title": "If, Elseif, and Else Statements",
            "content": "Conditional statements allow decision-making in your code. The `if` statement executes code when a condition is true, `elseif` handles additional conditions, and `else` provides a fallback for all other cases.",
            "points": [
                "`if`: Evaluates a condition and runs the code block if true.",
                "`elseif`: Allows additional conditions to be checked if the `if` condition is false.",
                "`else`: Executes code when all previous conditions fail."
            ],
            "code": `
<?php
// Example: Checking age
$age = 20;
if ($age >= 18) {
    echo "You are an adult."; // Output if age is 18 or more
} elseif ($age > 12) {
    echo "You are a teenager."; // Output if age is between 13 and 17
} else {
    echo "You are a minor."; // Output if age is 12 or less
}
?>
            `
        },
        {
            "title": "Switch Statement",
            "content": "The `switch` statement is used when a variable needs to be compared against multiple specific values. It's an alternative to writing many `if` statements and works best for simple equality checks.",
            "points": [
                "`case`: Defines a value to compare against the variable.",
                "`break`: Prevents fall-through to the next case.",
                "`default`: A fallback case if no other conditions match."
            ],
            "code": `
<?php
// Example: Switch case for days of the week
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Start of the work week."; // Output if $day is "Monday"
        break;
    case "Friday":
        echo "Almost weekend!"; // Output if $day is "Friday"
        break;
    default:
        echo "Another day."; // Output for all other values
}
?>
            `
        },
        {
            "title": "Loops for Repeated Execution",
            "content": "PHP provides several loop structures to repeat blocks of code based on conditions or iterating through arrays.",
            "points": [
                "`while`: Repeats as long as a condition is true.",
                "`do-while`: Executes at least once and then repeats if the condition is true.",
                "`for`: Loops with a defined start, end, and increment.",
                "`foreach`: Iterates over each element in an array."
            ],
            "code": `
<?php
// Example: Using a while loop
$count = 1;
while ($count <= 5) {
    echo $count . " "; // Output: 1 2 3 4 5
    $count++;
}

// Example: Using a foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
    echo $color . " "; // Output: red green blue
}
?>
            `
        }
    ],
    "pitfalls": [
        "Always include `break` statements in `switch` cases to prevent unintended fall-through behavior.",
        "Overly complex nested `if` or `switch` structures can make code hard to read and debug.",
        "Ensure loop conditions eventually become false to avoid infinite loops."
    ],
    "summary": "Control structures in PHP, such as conditional statements and loops, provide powerful ways to make decisions and repeat actions in your code. Understanding their usage helps in creating efficient and readable programs.",
    "practiceQuestions": [
        {
            "question": "Write an if-else statement to check if a number is positive, negative, or zero.",
            "hint": "Use relational operators to compare the variable to zero."
        },
        {
            "question": "Create a switch statement to print different messages for three favorite fruits.",
            "hint": "Use `case` for each fruit and include a `default` case."
        },
        {
            "question": "Write a while loop to print numbers from 1 to 10.",
            "hint": "Initialize a counter and increment it inside the loop."
        },
        {
            "question": "Explain the difference between `while` and `do-while` loops in PHP.",
            "hint": "Think about when the condition is checked."
        }
    ]
},
    "php_loops": {
    "title": "PHP Loops",
    "description": "Explore the various looping structures in PHP, including `for`, `while`, `do-while`, and `foreach`. Loops enable repetitive execution of code blocks, making them essential for tasks like iterating over arrays or performing operations multiple times.",
    "sections": [
        {
            "title": "For and While Loops",
            "content": "The `for` loop is best suited for scenarios where the number of iterations is known beforehand, as it combines initialization, condition, and increment in one line. The `while` loop, on the other hand, is ideal for situations where the number of iterations depends on a condition that is checked before each iteration.",
            "points": [
                "`for` loop syntax: `for (initialization; condition; increment) { code to execute }`.",
                "`while` loop syntax: `while (condition) { code to execute }`.",
                "Use `for` loops for numerical or indexed operations, and `while` loops for conditions evaluated dynamically."
            ],
            "code": `
<?php
// For Loop Example: Counting from 1 to 5
for ($i = 1; $i <= 5; $i++) {
    echo "Count: $i "; // Output: Count: 1 Count: 2 Count: 3 Count: 4 Count: 5
}

// While Loop Example: Iterating until a condition is met
$j = 1;
while ($j <= 5) {
    echo "Count: $j "; // Output: Count: 1 Count: 2 Count: 3 Count: 4 Count: 5
    $j++;
}
?>
            `
        },
        {
            "title": "Do-While Loop",
            "content": "The `do-while` loop guarantees at least one execution of the code block, regardless of whether the condition is initially true or false. This is because the condition is checked after the execution of the loop's body.",
            "points": [
                "`do-while` loop syntax: `do { code to execute } while (condition);`.",
                "Useful for tasks that require an action before validating the condition.",
                "Ensure proper conditions to prevent infinite loops."
            ],
            "code": `
<?php
// Do-While Example: Executing at least once
$k = 1;
do {
    echo "Count: $k "; // Output: Count: 1 Count: 2 Count: 3
    $k++;
} while ($k <= 3);
?>
            `
        },
        {
            "title": "Foreach Loop",
            "content": "The `foreach` loop is specifically designed for iterating over arrays. It simplifies accessing elements in both indexed and associative arrays by automatically iterating through each key-value pair.",
            "points": [
                "Syntax for indexed arrays: `foreach ($array as $value) { code to execute }`.",
                "Syntax for associative arrays: `foreach ($array as $key => $value) { code to execute }`.",
                "Avoid modifying the array structure inside the loop to ensure consistent behavior."
            ],
            "code": `
<?php
// Foreach Loop for Indexed Array
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
    echo "Color: $color "; // Output: Color: Red Color: Green Color: Blue
}

// Foreach Loop for Associative Array
$person = ["name" => "Alice", "age" => 25, "city" => "New York"];
foreach ($person as $key => $value) {
    echo "$key: $value "; // Output: name: Alice age: 25 city: New York
}
?>
            `
        },
        {
            "title": "Nested Loops",
            "content": "Nested loops allow one loop to be placed inside another, enabling multi-level iterations, such as working with multidimensional arrays.",
            "points": [
                "Inner loops complete all their iterations for each iteration of the outer loop.",
                "Commonly used in scenarios like rendering tables or processing multidimensional arrays."
            ],
            "code": `
<?php
// Nested Loop Example: Multiplication Table
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= 3; $j++) {
        echo "$i x $j = " . ($i * $j) . " "; // Output: Multiplication results
    }
}
?>
            `
        }
    ],
    "pitfalls": [
        "Ensure that loop conditions eventually become false; otherwise, you may create infinite loops, which can crash your application.",
        "When using nested loops, keep track of loop variables to avoid unexpected overwrites or logical errors.",
        "Avoid modifying the structure of arrays while iterating through them in a `foreach` loop, as it can lead to inconsistent behavior."
    ],
    "summary": "PHP loops (`for`, `while`, `do-while`, `foreach`) are essential for repetitive tasks, iterating over arrays, and processing complex data. Understanding their unique characteristics and best practices ensures efficient and bug-free implementation.",
    "practiceQuestions": [
        {
            "question": "Create a `for` loop to print numbers from 1 to 10.",
            "hint": "Set the initial value to 1, and increment until you reach 10."
        },
        {
            "question": "Write a `while` loop to calculate the sum of numbers from 1 to 100.",
            "hint": "Use a counter variable and update it inside the loop."
        },
        {
            "question": "Use a `foreach` loop to iterate through an associative array of countries and their capitals, and print them.",
            "hint": "Use `foreach ($array as $key => $value)` format."
        },
        {
            "question": "Explain the difference between `for` and `foreach` loops in PHP.",
            "hint": "Think about how they handle iterations and which one is better suited for arrays."
        },
        {
            "question": "Write a nested loop to display a 3x3 grid of numbers.",
            "hint": "Use an outer loop for rows and an inner loop for columns."
        }
    ]
},
    "php_enumerated_arrays": {
    "title": "PHP Enumerated Arrays",
    "description": "Explore the concept of enumerated arrays in PHP, where elements are stored with numeric indices. Learn how to create, manipulate, and use these arrays for sequential data storage.",
    "sections": [
        {
            "title": "Creating Enumerated Arrays",
            "content": "Enumerated arrays are the simplest form of arrays in PHP, where elements are stored with numeric indices starting from 0 by default. They can be created using the `array()` function or the shorthand `[]` syntax.",
            "points": [
                "Elements are automatically assigned numeric indices, starting at 0.",
                "You can initialize an enumerated array with any data type, including strings, numbers, and objects.",
                "Using the shorthand syntax `[]` is more common in modern PHP versions."
            ],
            "code": `
<?php
// Creating Enumerated Arrays
$fruits = array("Apple", "Banana", "Cherry"); // Using array() function
$colors = ["Red", "Green", "Blue"]; // Using shorthand []

// Adding elements
$numbers = [];
$numbers[] = 10; // Appends 10 at index 0
$numbers[] = 20; // Appends 20 at index 1
$numbers[] = 30; // Appends 30 at index 2

// Output the arrays
print_r($fruits); // Outputs: Array ( [0] => Apple [1] => Banana [2] => Cherry )
print_r($numbers); // Outputs: Array ( [0] => 10 [1] => 20 [2] => 30 )
?>
            `
        },
        {
            "title": "Accessing and Modifying Enumerated Arrays",
            "content": "Array elements are accessed using their numeric indices. You can read, update, or delete elements by referencing their index.",
            "points": [
                "Access elements using zero-based indexing.",
                "Update elements by assigning a new value to a specific index.",
                "Remove elements using the `unset()` function, but note that indices will not be re-indexed automatically."
            ],
            "code": `
<?php
$fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
echo $fruits[0]; // Outputs: Apple
echo $fruits[2]; // Outputs: Cherry

// Modifying elements
$fruits[1] = "Blueberry"; // Changes Banana to Blueberry
echo $fruits[1]; // Outputs: Blueberry

// Removing an element
unset($fruits[2]); // Removes Cherry
print_r($fruits); // Outputs: Array ( [0] => Apple [1] => Blueberry )
?>
            `
        },
        {
            "title": "Iterating Over Enumerated Arrays",
            "content": "You can iterate over enumerated arrays using loops like `foreach` or `for`, making it easy to process all elements in the array.",
            "points": [
                "Use `foreach` for a simple way to iterate over each element.",
                "Use `for` if you need access to both the index and the element.",
                "Re-index arrays after modifications using the `array_values()` function."
            ],
            "code": `
<?php
$fruits = ["Apple", "Banana", "Cherry"];

// Using foreach
foreach ($fruits as $fruit) {
    echo $fruit . " "; // Outputs: Apple Banana Cherry
}

// Using for loop
for ($i = 0; $i < count($fruits); $i++) {
    echo $fruits[$i] . " "; // Outputs: Apple Banana Cherry
}
?>
            `
        },
        {
            "title": "Advanced Manipulations of Enumerated Arrays",
            "content": "PHP provides several built-in functions to manipulate enumerated arrays, such as adding, merging, and slicing.",
            "points": [
                "Use `array_push()` to add elements to the end of an array.",
                "Merge arrays using `array_merge()`.",
                "Extract subsets of arrays with `array_slice()`."
            ],
            "code": `
<?php
$fruits = ["Apple", "Banana", "Cherry"];

// Adding elements
array_push($fruits, "Date", "Elderberry");
print_r($fruits); // Outputs: Array ( [0] => Apple [1] => Banana [2] => Cherry [3] => Date [4] => Elderberry )

// Merging arrays
$additionalFruits = ["Fig", "Grapes"];
$mergedFruits = array_merge($fruits, $additionalFruits);
print_r($mergedFruits); // Outputs: Merged array

// Slicing arrays
$slicedFruits = array_slice($mergedFruits, 1, 3);
print_r($slicedFruits); // Outputs: Array ( [0] => Banana [1] => Cherry [2] => Date )
?>
            `
        }
    ],
    "pitfalls": [
        "Ensure you use zero-based indexing when accessing elements, as PHP arrays start at index 0.",
        "Trying to access an index that does not exist will trigger a PHP notice. Use `isset()` to check if an index exists before accessing it.",
        "When removing elements with `unset()`, indices are not re-indexed automatically. Use `array_values()` if you need a re-indexed array."
    ],
    "summary": "Enumerated arrays in PHP store elements sequentially with numeric indices, starting from 0. They are versatile for managing lists of data and can be created, accessed, and manipulated using built-in PHP functions.",
    "practiceQuestions": [
        {
            "question": "Create an enumerated array with the names of four cities and display the second city.",
            "hint": "Use the `echo` statement to access the array element at index 1."
        },
        {
            "question": "Write a script to iterate over an enumerated array of colors and print each color.",
            "hint": "Use a `foreach` loop to access each element."
        },
        {
            "question": "How can you add a new element to an enumerated array and display the updated array?",
            "hint": "Use the `array_push()` function or shorthand syntax to add elements."
        },
        {
            "question": "Write a PHP script to merge two enumerated arrays and display the resulting array.",
            "hint": "Use the `array_merge()` function."
        },
        {
            "question": "Explain the difference between `unset()` and re-indexing with `array_values()`.",
            "hint": "Think about how they affect the structure of an array."
        }
    ]
},
   "php_associative_arrays": {
    "title": "PHP Associative Arrays",
    "description": "Explore associative arrays in PHP, where elements are stored as key-value pairs. Associative arrays use string keys, allowing for meaningful data organization and improved readability.",
    "sections": [
        {
            "title": "Creating Associative Arrays",
            "content": "Associative arrays store data using string keys rather than numeric indices, making them ideal for representing structured data like user profiles or configurations. You can create associative arrays using the `array()` function or the shorthand `[]` syntax.",
            "points": [
                "Keys can be strings or integers but are typically strings for readability.",
                "Values can be of any type, including strings, numbers, arrays, or objects.",
                "Shorthand syntax `[]` is commonly used in modern PHP versions."
            ],
            "code": `
<?php
// Using array() function
$person = array("name" => "John", "age" => 25, "city" => "New York");

// Using shorthand syntax
$car = ["make" => "Toyota", "model" => "Corolla", "year" => 2020];

// Nested associative arrays
$employee = [
    "name" => "Alice",
    "position" => "Manager",
    "details" => ["age" => 30, "department" => "Sales"]
];

// Output the arrays
print_r($person);
print_r($car);
print_r($employee);
?>
            `
        },
        {
            "title": "Accessing and Modifying Associative Arrays",
            "content": "Access elements in an associative array using their keys. You can also modify existing values or add new key-value pairs dynamically.",
            "points": [
                "Use keys to access specific values in the array.",
                "Assign new values to existing keys to update the array.",
                "Add new key-value pairs by assigning a value to a new key."
            ],
            "code": `
<?php
$person = ["name" => "John", "age" => 25, "city" => "New York"];

// Accessing elements
echo $person["name"]; // Outputs: John

// Modifying elements
$person["age"] = 26; // Updates age to 26

// Adding new key-value pairs
$person["job"] = "Engineer"; // Adds a new key-value pair

// Output the updated array
print_r($person); // Outputs updated array with job key
?>
            `
        },
        {
            "title": "Iterating Over Associative Arrays",
            "content": "Iterate through associative arrays to access keys and their corresponding values. Use the `foreach` loop for simplicity and efficiency.",
            "points": [
                "`foreach ($array as $key => $value)` iterates over each key-value pair.",
                "Use the key to access the element’s identifier and the value for the element's data.",
                "Useful for processing arrays like user profiles or configuration settings."
            ],
            "code": `
<?php
$car = ["make" => "Toyota", "model" => "Corolla", "year" => 2020];

foreach ($car as $key => $value) {
    echo "$key: $value "; // Outputs: make: Toyota model: Corolla year: 2020
}
?>
            `
        },
        {
            "title": "Advanced Usage of Associative Arrays",
            "content": "PHP provides built-in functions for manipulating associative arrays, such as adding, removing, or searching for elements.",
            "points": [
                "Use `array_key_exists()` to check if a key exists in the array.",
                "Remove elements with the `unset()` function.",
                "Retrieve all keys or values using `array_keys()` or `array_values()`.",
                "Combine arrays using `array_merge()`."
            ],
            "code": `
<?php
$person = ["name" => "John", "age" => 25, "city" => "New York"];

// Checking if a key exists
if (array_key_exists("age", $person)) {
    echo "Age is: " . $person["age"];
}

// Removing a key-value pair
unset($person["city"]);
print_r($person); // Outputs: Array ( [name] => John [age] => 25 )

// Retrieving keys and values
$keys = array_keys($person);
$values = array_values($person);
print_r($keys); // Outputs: Array ( [0] => name [1] => age )
print_r($values); // Outputs: Array ( [0] => John [1] => 25 )
?>
            `
        },
        {
            "title": "Nested Associative Arrays",
            "content": "Associative arrays can contain other arrays as values, allowing for hierarchical data structures. This is useful for organizing complex datasets like user profiles, configurations, or nested records.",
            "code": `
<?php
$company = [
    "name" => "TechCorp",
    "departments" => [
        "HR" => ["head" => "Alice", "employees" => 10],
        "IT" => ["head" => "Bob", "employees" => 20]
    ]
];

// Accessing nested arrays
echo $company["departments"]["HR"]["head"]; // Outputs: Alice

// Iterating through nested arrays
foreach ($company["departments"] as $dept => $info) {
    echo "$dept head: " . $info["head"] . ", employees: " . $info["employees"];
}
?>
            `
        }
    ],
    "pitfalls": [
        "Be careful with spelling and capitalization when using keys, as PHP keys are case-sensitive.",
        "Accessing a non-existent key will trigger a PHP notice. Use `isset()` or `array_key_exists()` to check for key existence.",
        "When modifying nested arrays, ensure the structure is properly initialized to avoid runtime errors."
    ],
    "summary": "Associative arrays in PHP store elements as key-value pairs, offering flexibility and readability. They are ideal for organizing structured data and can be manipulated using built-in PHP functions.",
    "practiceQuestions": [
        {
            "question": "Create an associative array with details of a car (e.g., make, model, year) and access the model.",
            "hint": "Define each property with a string key in the array, then access it using its key."
        },
        {
            "question": "Write a script to iterate through an associative array of a person's details and display each key-value pair.",
            "hint": "Use a `foreach` loop with `key => value` format."
        },
        {
            "question": "How would you check if a key exists in an associative array?",
            "hint": "Think about PHP functions for key existence."
        },
        {
            "question": "Write a PHP script to merge two associative arrays and display the resulting array.",
            "hint": "Use the `array_merge()` function."
        },
        {
            "question": "Create a nested associative array to represent departments in a company and print the head of one department.",
            "hint": "Use an array of arrays, then access nested values with multiple keys."
        }
    ]
},
    "php_multidimensional_arrays": {
    "title": "PHP Multi-Dimensional Arrays",
    "description": "Dive into multi-dimensional arrays in PHP, which allow arrays within arrays for representing complex data structures such as tables, matrices, or hierarchical datasets. Learn how to create, access, and manipulate these arrays effectively.",
    "sections": [
        {
            "title": "Creating Multi-Dimensional Arrays",
            "content": "Multi-dimensional arrays are arrays that contain other arrays as their elements. These arrays are ideal for storing structured data, such as rows in a table or hierarchical information.",
            "points": [
                "The first level of indices refers to the main array, while subsequent levels refer to inner arrays.",
                "Multi-dimensional arrays can be created using nested `array()` or shorthand `[]` syntax.",
                "Common use cases include storing tabular data, JSON-like structures, or tree hierarchies."
            ],
            "code": `
<?php
// Example: Array of students
$students = [
    ["name" => "Alice", "age" => 20, "grade" => "A"],
    ["name" => "Bob", "age" => 22, "grade" => "B"],
    ["name" => "Charlie", "age" => 21, "grade" => "C"]
];

// Example: Nested numerical array (matrix)
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Output the arrays
print_r($students);
print_r($matrix);
?>
            `
        },
        {
            "title": "Accessing Elements in Multi-Dimensional Arrays",
            "content": "Accessing elements in a multi-dimensional array requires multiple indices: the first for the main array and subsequent indices for inner arrays.",
            "points": [
                "Use the first index to select the row or outer array.",
                "Use additional indices to select specific elements from the inner array.",
                "For associative arrays, use string keys at the appropriate level."
            ],
            "code": `
<?php
$students = [
    ["name" => "Alice", "age" => 20, "grade" => "A"],
    ["name" => "Bob", "age" => 22, "grade" => "B"],
    ["name" => "Charlie", "age" => 21, "grade" => "C"]
];

// Accessing specific values
echo $students[0]["name"]; // Outputs: Alice
echo $students[1]["grade"]; // Outputs: B

// Accessing numerical arrays
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
echo $matrix[2][1]; // Outputs: 8
?>
            `
        },
        {
            "title": "Iterating Over Multi-Dimensional Arrays",
            "content": "Multi-dimensional arrays can be traversed using nested loops, such as `foreach` or `for` loops, to access each element systematically.",
            "points": [
                "Use an outer loop to iterate over the main array and an inner loop to iterate over sub-arrays.",
                "`foreach` is ideal for associative arrays, while `for` is suitable for numerical arrays.",
                "Handle different levels of nested arrays carefully to avoid errors."
            ],
            "code": `
<?php
$students = [
    ["name" => "Alice", "age" => 20, "grade" => "A"],
    ["name" => "Bob", "age" => 22, "grade" => "B"],
    ["name" => "Charlie", "age" => 21, "grade" => "C"]
];

// Iterating with nested foreach
foreach ($students as $student) {
    foreach ($student as $key => $value) {
        echo "$key: $value "; // Outputs key-value pairs for each student
    }
    echo "\\n"; // New line for readability
}

// Iterating with nested for loops (matrix example)
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for ($i = 0; $i < count($matrix); $i++) {
    for ($j = 0; $j < count($matrix[$i]); $j++) {
        echo $matrix[$i][$j] . " "; // Outputs elements of the matrix row by row
    }
    echo "\\n"; // New line for each row
}
?>
            `
        },
        {
            "title": "Manipulating Multi-Dimensional Arrays",
            "content": "PHP provides various built-in functions and manual approaches to manipulate multi-dimensional arrays, such as adding, updating, and removing elements.",
            "points": [
                "Add new rows or elements using the `[]` syntax.",
                "Remove rows or elements using `unset()`.",
                "Merge multi-dimensional arrays using `array_merge()` or other functions."
            ],
            "code": `
<?php
// Adding a new row to a multi-dimensional array
$students = [
    ["name" => "Alice", "age" => 20, "grade" => "A"],
    ["name" => "Bob", "age" => 22, "grade" => "B"]
];
$students[] = ["name" => "Diana", "age" => 23, "grade" => "A+"];

// Updating elements
$students[1]["grade"] = "A"; // Updates Bob's grade to A

// Removing a row
unset($students[0]); // Removes Alice

// Output updated array
print_r($students);
?>
            `
        }
    ],
    "pitfalls": [
        "Double-check indices and keys to avoid accessing undefined elements, which can trigger warnings or errors.",
        "Avoid excessive nesting, as it can make the array and its traversal complex and error-prone.",
        "Be mindful of `unset()` when removing elements, as it will not re-index the array."
    ],
    "summary": "PHP multi-dimensional arrays allow you to create and manage complex data structures like tables or nested records. They can be manipulated and traversed using loops and PHP's built-in array functions.",
    "practiceQuestions": [
        {
            "question": "Create a multi-dimensional array to store names and ages of three people, and display the age of the second person.",
            "hint": "Define each person's details as an associative array within the main array."
        },
        {
            "question": "Write a PHP script to iterate through a numerical 2D array and print its elements row by row.",
            "hint": "Use nested loops to access each element of the array."
        },
        {
            "question": "How can you add another student to your multi-dimensional array?",
            "hint": "Use the `[]` syntax to add a new associative array."
        },
        {
            "question": "Write a script to update the grade of a specific student in a multi-dimensional array.",
            "hint": "Access the specific element using indices and assign a new value."
        },
        {
            "question": "Create a nested associative array to represent employees in departments and display the name of a specific employee.",
            "hint": "Use an array of associative arrays and access nested values with keys."
        }
    ]
},
   "php_functions_syntax": {
    "title": "PHP Functions: Syntax and Arguments",
    "description": "Master the syntax for defining and using functions in PHP, including how to handle arguments, default values, and return statements for modular and reusable code.",
    "sections": [
        {
            "title": "Defining Functions",
            "content": "Functions in PHP are blocks of reusable code that perform specific tasks. They are defined using the `function` keyword followed by a unique name, a set of parentheses, and a code block enclosed in curly braces.",
            "points": [
                "Function names should be descriptive and adhere to PHP naming conventions.",
                "Functions can be defined anywhere in the script, but they must be declared before they are called.",
                "Functions help in reducing code repetition and improving maintainability."
            ],
            "code": `
<?php
// Simple function definition
function greet() {
    echo "Hello, World!";
}

// Calling the function
greet(); // Outputs: Hello, World!
?>
            `
        },
        {
            "title": "Using Function Arguments",
            "content": "Arguments are variables passed into a function to provide input data for processing. Arguments make functions dynamic and flexible.",
            "points": [
                "Define arguments inside the parentheses of the function declaration.",
                "Multiple arguments are separated by commas.",
                "Functions can handle optional arguments by assigning default values."
            ],
            "code": `
<?php
// Function with one argument
function greet($name) {
    echo "Hello, $name!";
}

// Function with multiple arguments
function add($a, $b) {
    return $a + $b;
}

// Calling functions with arguments
greet("Alice"); // Outputs: Hello, Alice!
echo add(5, 3); // Outputs: 8
?>
            `
        },
        {
            "title": "Default Argument Values",
            "content": "PHP allows you to specify default values for arguments in a function. If no value is passed when the function is called, the default value is used.",
            "points": [
                "Default values must be constants, variables are not allowed.",
                "Optional arguments should always appear after required arguments.",
                "Default arguments make functions more versatile and reduce the need for overloaded functions."
            ],
            "code": `
<?php
// Function with a default argument
function greet($name = "Guest") {
    echo "Hello, $name!";
}

// Calling the function
greet(); // Outputs: Hello, Guest!
greet("Bob"); // Outputs: Hello, Bob!
?>
            `
        },
        {
            "title": "Return Statements",
            "content": "Functions can return values using the `return` statement. This allows the calling code to use the result of the function.",
            "points": [
                "Functions can return any data type, including arrays and objects.",
                "The `return` statement terminates the function execution immediately.",
                "If no `return` statement is used, the function will return `NULL` by default."
            ],
            "code": `
<?php
// Function with a return value
function add($a, $b) {
    return $a + $b;
}

$result = add(10, 20);
echo $result; // Outputs: 30
?>
            `
        },
        {
            "title": "Variable-Length Argument Lists",
            "content": "PHP functions can accept variable numbers of arguments using the `...` (splat) operator. This allows passing multiple values without explicitly defining all arguments.",
            "points": [
                "The `...` operator collects all additional arguments into an array.",
                "Use `foreach` to iterate through the arguments.",
                "This is useful for functions that handle dynamic input sizes."
            ],
            "code": `
<?php
// Function with variable-length arguments
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $number) {
        $total += $number;
    }
    return $total;
}

// Calling the function with multiple arguments
echo sum(1, 2, 3, 4); // Outputs: 10
?>
            `
        }
    ],
    "pitfalls": [
        "Ensure function names are unique within the same scope to avoid naming conflicts.",
        "Missing required arguments will cause a runtime error. Use default values for optional arguments to prevent this.",
        "Avoid excessive use of global variables inside functions; prefer passing them as arguments for better clarity and testability."
    ],
    "summary": "PHP functions encapsulate reusable code blocks that accept arguments, process data, and optionally return results. Mastering function syntax and argument handling improves code organization and efficiency.",
    "practiceQuestions": [
        {
            "question": "Create a function to add two numbers and return the result.",
            "hint": "Define a function that accepts two parameters, adds them, and returns the sum."
        },
        {
            "question": "What happens if you call a function without providing the expected arguments?",
            "hint": "Consider how PHP handles missing arguments."
        },
        {
            "question": "Define a function with default argument values to greet a user and use the default when no name is provided.",
            "hint": "Use the `=` syntax in the function declaration for default values."
        },
        {
            "question": "Write a function that accepts any number of arguments and returns their sum.",
            "hint": "Use the `...` operator to handle variable-length arguments."
        },
        {
            "question": "Create a function that multiplies two numbers, but return `null` if either argument is not a number.",
            "hint": "Use type checking with `is_numeric` inside the function."
        }
    ]
},
   "php_pass_by_value_reference": {
    "title": "Pass by Value & Reference",
    "description": "Learn the difference between passing by value and passing by reference in PHP, including how each method affects variables and when to use them.",
    "sections": [
        {
            "title": "Pass by Value",
            "content": "By default, PHP passes variables to functions by value. This means the function receives a copy of the variable, and any modifications made to it inside the function do not affect the original variable.",
            "points": [
                "The original variable remains unchanged outside the function.",
                "Best used when the function does not need to modify the variable.",
                "Prevents unintended side effects in the calling code."
            ],
            "code": `
<?php
function increment($num) {
    $num++;
    echo "Inside function: $num\\n"; // Outputs: Inside function: 6
}

$a = 5;
increment($a);
echo "Outside function: $a\\n"; // Outputs: Outside function: 5
?>
            `
        },
        {
            "title": "Pass by Reference",
            "content": "When passing by reference, the function receives a reference to the original variable, allowing it to modify the variable directly. This is done by adding an `&` before the parameter in the function definition.",
            "points": [
                "The original variable is updated directly by the function.",
                "Useful for functions that need to modify or update the input variable.",
                "Requires careful handling to avoid unintended changes."
            ],
            "code": `
<?php
function increment(&$num) {
    $num++;
    echo "Inside function: $num\\n"; // Outputs: Inside function: 6
}

$a = 5;
increment($a);
echo "Outside function: $a\\n"; // Outputs: Outside function: 6
?>
            `
        },
        {
            "title": "Pass by Value with Arrays",
            "content": "When arrays are passed by value, a copy of the array is passed to the function. Changes inside the function do not affect the original array unless explicitly returned and reassigned.",
            "points": [
                "Arrays are copied when passed by value, but this can be memory-intensive for large arrays.",
                "Returning the modified array and reassigning it to the original variable is a common approach."
            ],
            "code": `
<?php
function modifyArray($arr) {
    $arr[] = "New Element";
    print_r($arr); // Outputs the modified array inside the function
}

$myArray = ["One", "Two", "Three"];
modifyArray($myArray);
print_r($myArray); // Original array remains unchanged
?>
            `
        },
        {
            "title": "Pass by Reference with Arrays",
            "content": "Using references with arrays allows the function to modify the original array directly. This can be more efficient but requires careful handling to avoid unintended side effects.",
            "points": [
                "The original array is updated directly by the function.",
                "Efficient for large arrays where copying would be costly.",
                "Best used for specific use cases where modifications are intentional."
            ],
            "code": `
<?php
function modifyArray(&$arr) {
    $arr[] = "New Element";
    print_r($arr); // Outputs the modified array inside the function
}

$myArray = ["One", "Two", "Three"];
modifyArray($myArray);
print_r($myArray); // Original array is modified
?>
            `
        },
        {
            "title": "Return Values vs. References",
            "content": "PHP functions can also return references, allowing the calling code to directly modify the returned variable. This is less common but can be useful in specific scenarios.",
            "points": [
                "Returning by reference allows direct modification of the returned value.",
                "Use `&` before the function name in the declaration to return by reference.",
                "This technique is often used in custom object handling or advanced optimization cases."
            ],
            "code": `
<?php
function &getReference(&$var) {
    return $var;
}

$a = 5;
$b = &getReference($a);
$b = 10;

echo $a; // Outputs: 10, because $b is a reference to $a
?>
            `
        }
    ],
    "pitfalls": [
        "Be cautious with references, as they can make debugging harder if unintended changes occur.",
        "Passing large arrays by value can lead to performance issues due to memory usage.",
        "Ensure that reference modifications are intentional and well-documented to avoid confusion."
    ],
    "summary": "PHP supports both pass by value (default) and pass by reference, each with distinct use cases. Passing by value protects the original variable, while passing by reference allows direct modifications. Understanding when to use each method is key to writing efficient and predictable code.",
    "practiceQuestions": [
        {
            "question": "Write a function that doubles a number by reference.",
            "hint": "Define the function parameter with `&` to modify the original variable."
        },
        {
            "question": "What would happen if you use pass by value with an array? Would changes inside the function reflect outside?",
            "hint": "Think about how arrays are handled in PHP."
        },
        {
            "question": "Write a function to add a new element to an array passed by reference.",
            "hint": "Use `&` in the parameter definition and modify the array."
        },
        {
            "question": "Explain the difference between passing an array by value and by reference.",
            "hint": "Consider the behavior of the original array after the function is executed."
        },
        {
            "question": "What is the difference between returning by reference and returning by value?",
            "hint": "Think about how the calling code interacts with the returned value."
        }
    ]
},
   "php_variable_scope": {
    "title": "PHP Variable Scope",
    "description": "Understand how variable scope in PHP determines the accessibility and lifetime of variables, including global, local, and static scopes, and learn how to manage them effectively.",
    "sections": [
        {
            "title": "Global and Local Scope",
            "content": "PHP variables have either global or local scope, depending on where they are declared. Variables declared outside any function are global and accessible throughout the script, except inside functions, unless explicitly stated. Variables declared inside a function have local scope and are only accessible within that function.",
            "points": [
                "Global variables are declared outside of functions and accessible anywhere in the script, except directly within functions.",
                "Local variables exist only within the function they are declared in.",
                "The `global` keyword allows functions to access global variables explicitly."
            ],
            "code": `
<?php
// Global variable
$globalVar = "I am global!";

function test() {
    // Local variable
    $localVar = "I am local!";
    echo $localVar; // Outputs: I am local!
    // Accessing global variable using 'global' keyword
    global $globalVar;
    echo $globalVar; // Outputs: I am global!
}

// Function call
test();

// Trying to access localVar outside the function will cause an error
// echo $localVar; // Error: Undefined variable
?>
            `
        },
        {
            "title": "Static Variables",
            "content": "Static variables in PHP retain their value even after the function exits. Unlike regular local variables, they are initialized only once and keep their value across multiple function calls.",
            "points": [
                "Static variables are defined using the `static` keyword inside a function.",
                "They are useful for counting function calls or maintaining a state between calls.",
                "Static variables are not accessible outside the function."
            ],
            "code": `
<?php
function countCalls() {
    static $count = 0; // Retains value across function calls
    $count++;
    echo "Call count: $count\\n";
}

countCalls(); // Outputs: Call count: 1
countCalls(); // Outputs: Call count: 2
countCalls(); // Outputs: Call count: 3
?>
            `
        },
        {
            "title": "Superglobals",
            "content": "PHP provides predefined variables called superglobals that are accessible from anywhere in the script, regardless of scope. Examples include `$_GET`, `$_POST`, `$_SESSION`, and `$_COOKIE`.",
            "points": [
                "Superglobals are built-in arrays that hold important data like form inputs, session variables, and environment information.",
                "`$_GET` and `$_POST` handle data from URL parameters and HTML forms.",
                "`$_SERVER` provides server and execution environment details."
            ],
            "code": `
<?php
// Example of using a superglobal
echo $_SERVER['SERVER_NAME']; // Outputs the server name
?>
            `
        },
        {
            "title": "Global Keyword and $GLOBALS Array",
            "content": "Global variables can also be accessed inside functions using the `global` keyword or the `$GLOBALS` superglobal array.",
            "points": [
                "The `global` keyword imports the global variable into the function's local scope.",
                "The `$GLOBALS` array allows direct access to all global variables by their names."
            ],
            "code": `
<?php
$globalVar = "Global Variable";

// Using global keyword
function useGlobalKeyword() {
    global $globalVar;
    echo $globalVar; // Outputs: Global Variable
}

// Using $GLOBALS array
function useGlobalsArray() {
    echo $GLOBALS['globalVar']; // Outputs: Global Variable
}

useGlobalKeyword();
useGlobalsArray();
?>
            `
        }
    ],
    "pitfalls": [
        "Avoid overusing global variables as they can make code harder to debug and maintain.",
        "Static variables are not thread-safe and can lead to unexpected results in concurrent execution scenarios.",
        "Accessing a variable outside its scope will result in an undefined variable error."
    ],
    "summary": "PHP variable scope defines the visibility and lifetime of variables. Understanding global, local, and static scopes, along with superglobals, helps write organized and efficient code.",
    "practiceQuestions": [
        {
            "question": "Create a function that counts the number of times it has been called using a static variable.",
            "hint": "Define a static variable within the function and increment it each call."
        },
        {
            "question": "How would you access a global variable inside a function?",
            "hint": "Use the `global` keyword or `$GLOBALS` array."
        },
        {
            "question": "What happens if you try to access a local variable outside its function?",
            "hint": "Consider the implications of scope."
        },
        {
            "question": "Write a script to demonstrate the difference between global and static variables.",
            "hint": "Create two functions, one using a global variable and another using a static variable."
        },
        {
            "question": "Explain the role of superglobals in PHP and provide an example using `$_SERVER`.",
            "hint": "Think about data that superglobals provide access to across scopes."
        }
    ]
},
  "php_include_require": {
    "title": "Using PHP include() and require()",
    "description": "Learn how to use `include()` and `require()` in PHP for modular development, enabling you to reuse code across multiple scripts effectively. Understand their differences, use cases, and best practices.",
    "sections": [
        {
            "title": "The include() Function",
            "content": "The `include()` function is used to insert the content of one PHP file into another. If the file specified in `include()` is not found, PHP generates a warning, but the script continues execution. This makes `include()` ideal for optional files or files that do not disrupt the overall flow if missing.",
            "points": [
                "Allows code reusability by including files with common functionality, like headers or footers.",
                "Continues execution even if the file is missing.",
                "Useful for non-critical files."
            ],
            "code": `
<?php
// Including a header file
include('header.php');

// Including a non-existent file
include('nonexistent.php'); // Outputs a warning but script continues

echo "Script continues..."; // This will still execute
?>
            `
        },
        {
            "title": "The require() Function",
            "content": "The `require()` function is similar to `include()` but with a stricter behavior. If the specified file is not found, PHP generates a fatal error, halting the script's execution. This makes `require()` more suitable for critical files that the application cannot run without.",
            "points": [
                "Ensures the specified file is included, or the script stops execution.",
                "Used for critical files, such as configuration files or essential functions.",
                "Prevents undefined behavior by ensuring required files are present."
            ],
            "code": `
<?php
// Requiring a configuration file
require('config.php');

// Requiring a non-existent file
require('nonexistent.php'); // Fatal error: script execution halts

echo "This will not execute if the file is missing.";
?>
            `
        },
        {
            "title": "Best Practices with include() and require()",
            "content": "To make the best use of `include()` and `require()`, consider the following tips:",
            "points": [
                "Use `file_exists()` to check if the file exists before including or requiring it.",
                "Organize reusable code into separate files and include them as needed.",
                "Use absolute paths to avoid issues with file locations.",
                "Prefer `require()` for critical files and `include()` for optional ones."
            ],
            "code": `
<?php
// Using file_exists() before including a file
if (file_exists('header.php')) {
    include('header.php');
} else {
    echo "Header file not found!";
}

// Using absolute paths
require('/var/www/html/config.php');
?>
            `
        },
        {
            "title": "Using include_once() and require_once()",
            "content": "`include_once()` and `require_once()` are variations of `include()` and `require()` that ensure the file is included only once during script execution. This prevents redeclaration errors for functions or variables.",
            "points": [
                "Prevents accidental multiple inclusions of the same file.",
                "Useful for files containing function or class definitions.",
                "Improves script reliability in large projects."
            ],
            "code": `
<?php
// Using include_once
include_once('header.php');
include_once('header.php'); // This will not include the file again

// Using require_once
require_once('config.php');
require_once('config.php'); // No redeclaration error
?>
            `
        }
    ],
    "pitfalls": [
        "Be careful with relative paths as they depend on the current script's location.",
        "Including files with syntax errors can disrupt the script; test included files separately.",
        "Overusing `include` or `require` for small pieces of code can lead to fragmentation and reduced readability."
    ],
    "summary": "PHP `include()` and `require()` are powerful tools for modular development, allowing you to reuse code efficiently. Use `require()` for critical files and `include()` for optional ones. Variants like `include_once()` and `require_once()` ensure files are included only once, avoiding redeclaration errors.",
    "practiceQuestions": [
        {
            "question": "Add a PHP header file using `include` and a configuration file using `require`.",
            "hint": "Ensure both files exist in the correct paths."
        },
        {
            "question": "What is the difference in behavior between `include` and `require` when the file is missing?",
            "hint": "Think about the consequences of each function."
        },
        {
            "question": "How can you check if a file exists before including it?",
            "hint": "Use the `file_exists()` function for validation."
        },
        {
            "question": "Write a script to include a file only once, even if the script attempts to include it multiple times.",
            "hint": "Use `include_once()` or `require_once()` for this task."
        },
        {
            "question": "Explain why using absolute paths for includes and requires can be beneficial.",
            "hint": "Think about issues with relative paths in nested directories."
        }
    ]
},
    php_form_handling: {
        title: "PHP Form Handling",
        description: "Learn how to handle form submissions in PHP, including retrieving and processing user input.",
        sections: [
            {
                title: "Creating a Basic HTML Form",
                content: "To handle form data, first create an HTML form using the `form` tag. Specify the method (`GET` or `POST`) for submitting data.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="process.php" method="POST">
                        Name: <input type="text" name="name"><br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Processing Form Data in PHP",
                content: "Use the global `$_POST` or `$_GET` arrays to access submitted form data in your PHP script.",
                code: `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = $_POST["name"];
                        echo "Hello, $name!";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Make sure the `action` attribute points to the correct PHP file for processing.",
            "Be aware of the method (`GET` or `POST`) used to submit the form, as it affects how data is accessed."
        ],
        summary: "PHP form handling involves creating HTML forms, submitting them, and processing the data using global arrays like `$_POST` and `$_GET`.",
        practiceQuestions: [
            {
                question: "Create a form that collects a user's email and processes it in PHP.",
                hint: "Ensure to use the appropriate `input` type for email."
            },
            {
                question: "How can you display an error message if the name field is left empty?",
                hint: "Check if the name variable is empty after submission."
            },
            {
                question: "Explain the difference between the `GET` and `POST` methods in form handling.",
                hint: "Consider aspects like data visibility and limits on data size."
            }
        ]
    },
    php_get_post: {
        title: "PHP GET and POST",
        description: "Understand the differences between the GET and POST methods for sending data to a server.",
        sections: [
            {
                title: "Using the GET Method",
                content: "The `GET` method appends data to the URL, allowing users to bookmark the page. It's suitable for non-sensitive data.",
                code: `<?php
                    // Accessing data sent via GET
                    if ($_SERVER["REQUEST_METHOD"] == "GET") {
                        $name = $_GET["name"];
                        echo "Hello, $name!";
                    }
                ?>`
            },
            {
                title: "Using the POST Method",
                content: "The `POST` method sends data in the request body, which is more secure for sensitive data like passwords.",
                code: `<?php
                    // Accessing data sent via POST
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $password = $_POST["password"];
                        echo "Password received.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Be cautious with sensitive information; avoid using GET for passwords.",
            "GET requests have limitations on data size, while POST can handle larger amounts."
        ],
        summary: "GET and POST are two methods for sending data in PHP, with GET being suitable for non-sensitive data and POST for sensitive or large data.",
        practiceQuestions: [
            {
                question: "Create a form that sends user data using both GET and POST methods and display the data received.",
                hint: "Create two separate forms for demonstration."
            },
            {
                question: "What security risks are associated with using GET for sending sensitive data?",
                hint: "Consider data visibility in the URL."
            },
            {
                question: "Explain when you would choose to use POST over GET in a web application.",
                hint: "Think about scenarios involving user privacy."
            }
        ]
    },
    php_form_validation: {
        title: "PHP Form Validation",
        description: "Learn how to validate user input from forms to ensure data integrity and security.",
        sections: [
            {
                title: "Validating Input Data",
                content: "Input validation checks if the data submitted via a form meets certain criteria before processing it.",
                code: `<?php
                    $name = "";
                    $error = "";

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (empty($_POST["name"])) {
                            $error = "Name is required";
                        } else {
                            $name = htmlspecialchars($_POST["name"]);
                        }
                    }
                ?>`
            },
            {
                title: "Using Regular Expressions for Validation",
                content: "Regular expressions can be used to validate data formats, such as email addresses or phone numbers.",
                code: `<?php
                    if (!preg_match("/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/", $_POST["email"])) {
                        $error = "Invalid email format";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always sanitize user input to prevent XSS attacks.",
            "Be specific about validation criteria to ensure user data is correct."
        ],
        summary: "Form validation in PHP ensures that user input is correct and secure, using methods like checking for empty fields and employing regular expressions.",
        practiceQuestions: [
            {
                question: "Create a form that validates a user's age to ensure they are at least 18 years old.",
                hint: "Use a numeric input type and check the value in PHP."
            },
            {
                question: "How can you enhance security by validating user input?",
                hint: "Consider potential vulnerabilities like SQL injection."
            },
            {
                question: "Explain the purpose of the `htmlspecialchars()` function in input validation.",
                hint: "Think about how it protects against XSS."
            }
        ]
    },
    php_form_sanitization: {
        title: "PHP Form Sanitization",
        description: "Understand the importance of sanitizing user input to prevent security vulnerabilities.",
        sections: [
            {
                title: "What is Sanitization?",
                content: "Sanitization involves cleaning user input to remove unwanted characters or scripts, enhancing security.",
                code: `<?php
                    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
                ?>`
            },
            {
                title: "Sanitizing with Built-in Functions",
                content: "PHP provides various built-in functions for sanitizing data, including `filter_var()` for specific types.",
                code: `<?php
                    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
                ?>`
            }
        ],
        pitfalls: [
            "Sanitization should not be confused with validation; both are crucial for security.",
            "Always sanitize data before using it in SQL queries to prevent SQL injection."
        ],
        summary: "Sanitization in PHP cleans user input to eliminate threats like XSS and SQL injection, utilizing functions like `filter_var()`.",
        practiceQuestions: [
            {
                question: "Demonstrate how to sanitize user input from a contact form before processing it.",
                hint: "Use appropriate filter functions based on input type."
            },
            {
                question: "What is the difference between sanitization and validation in PHP?",
                hint: "Think about their roles in data integrity and security."
            },
            {
                question: "Explain why it is important to sanitize data before storing it in a database.",
                hint: "Consider the implications for data security."
            }
        ]
    },
    php_cookie_handling: {
        title: "PHP Cookie Handling",
        description: "Learn how to set, retrieve, and manage cookies in PHP to store user preferences.",
        sections: [
            {
                title: "Setting Cookies",
                content: "Cookies are set using the `setcookie()` function in PHP. Specify the cookie name, value, expiration time, and path.",
                code: `<?php
                    setcookie("username", "JohnDoe", time() + (86400 * 30), "/");
                    echo "Cookie 'username' is set!";
                ?>`
            },
            {
                title: "Retrieving Cookies",
                content: "Access cookies through the `$_COOKIE` superglobal array.",
                code: `<?php
                    if(isset($_COOKIE["username"])) {
                        echo "Username: " . $_COOKIE["username"];
                    } else {
                        echo "Cookie not found.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Cookies must be set before any output is sent to the browser.",
            "Be mindful of the size limit for cookies (typically 4 KB)."
        ],
        summary: "Cookie handling in PHP involves setting and retrieving cookies to maintain state across user sessions.",
        practiceQuestions: [
            {
                question: "Create a cookie that stores a user's favorite color and retrieve it on another page.",
                hint: "Set the cookie with a suitable expiration time."
            },
            {
                question: "What are some security concerns related to using cookies?",
                hint: "Consider aspects like data privacy and cookie theft."
            },
            {
                question: "How can you delete a cookie in PHP?",
                hint: "Set the expiration time to a past date."
            }
        ]
    },
    php_session_handling: {
        title: "PHP Session Handling",
        description: "Understand how to manage user sessions in PHP to track user activity across different pages.",
        sections: [
            {
                title: "Starting a Session",
                content: "Start a session with `session_start()`, which must be called before any output.",
                code: `<?php
                    session_start();
                    $_SESSION["username"] = "JohnDoe";
                    echo "Session started and username set!";
                ?>`
            },
            {
                title: "Accessing Session Variables",
                content: "Session variables can be accessed using the `$_SESSION` superglobal array.",
                code: `<?php
                    session_start();
                    if(isset($_SESSION["username"])) {
                        echo "Welcome, " . $_SESSION["username"];
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always start the session before any HTML output.",
            "Be cautious of session hijacking; consider using HTTPS."
        ],
        summary: "Session handling in PHP allows you to store user data across multiple pages, enhancing the user experience.",
        practiceQuestions: [
            {
                question: "Create a login system using sessions to track user login status.",
                hint: "Use session variables to store user information after logging in."
            },
            {
                question: "Explain the difference between cookies and sessions in PHP.",
                hint: "Consider their storage locations and data persistence."
            },
            {
                question: "What are some best practices for securing sessions in PHP?",
                hint: "Think about session regeneration and secure cookie settings."
            }
        ]
    },
    php_login_session: {
        title: "PHP Login Session",
        description: "Implement a login system using sessions to maintain user state after authentication.",
        sections: [
            {
                title: "Creating a Login Form",
                content: "Build a simple HTML form for user login, specifying the method as POST.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="login.php" method="POST">
                        Username: <input type="text" name="username"><br>
                        Password: <input type="password" name="password"><br>
                        <input type="submit" value="Login">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Processing Login Credentials",
                content: "Validate user credentials and start a session upon successful login.",
                code: `<?php
                    session_start();
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $username = $_POST["username"];
                        $password = $_POST["password"];
                        // Assume a function check_credentials() exists
                        if (check_credentials($username, $password)) {
                            $_SESSION["username"] = $username;
                            echo "Login successful!";
                        } else {
                            echo "Invalid username or password.";
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Never store passwords in plain text; always hash them.",
            "Validate and sanitize user inputs to prevent SQL injection."
        ],
        summary: "Login sessions in PHP allow you to authenticate users and track their session state across the application.",
        practiceQuestions: [
            {
                question: "Enhance the login system to log out users by destroying the session.",
                hint: "Use `session_destroy()` to log out the user."
            },
            {
                question: "What measures can be taken to secure user passwords in your login system?",
                hint: "Consider password hashing techniques."
            },
            {
                question: "How would you implement user roles (e.g., admin, user) in your session management?",
                hint: "Think about using additional session variables."
            }
        ]
    },
    php_string_patterns: {
        title: "String Patterns and Matching",
        description: "Learn how to use string patterns and regular expressions to validate and manipulate strings in PHP.",
        sections: [
            {
                title: "Using Regular Expressions",
                content: "Regular expressions allow you to perform pattern matching on strings. Use `preg_match()` to validate formats.",
                code: `<?php
                    $pattern = "/^[a-zA-Z]+$/"; // Only letters
                    if (preg_match($pattern, "Hello")) {
                        echo "String matches the pattern.";
                    } else {
                        echo "String does not match.";
                    }
                ?>`
            },
            {
                title: "Replacing Strings with preg_replace()",
                content: "You can replace parts of strings using `preg_replace()`.",
                code: `<?php
                    $string = "Hello World!";
                    $newString = preg_replace("/World/", "PHP", $string);
                    echo $newString; // Outputs: Hello PHP!
                ?>`
            }
        ],
        pitfalls: [
            "Regular expressions can be complex; test your patterns thoroughly.",
            "Consider performance implications with large data sets."
        ],
        summary: "String patterns and matching in PHP utilize regular expressions for validating and manipulating string data.",
        practiceQuestions: [
            {
                question: "Write a regular expression to validate an email address format.",
                hint: "Consider various components like username, domain, and extension."
            },
            {
                question: "Demonstrate how to use preg_split() to split a string by a specific delimiter.",
                hint: "Think about using a comma or space as a delimiter."
            },
            {
                question: "How can you use regular expressions to check if a string contains only digits?",
                hint: "Use a suitable pattern for numeric validation."
            }
        ]
    },
    php_sending_emails: {
        title: "PHP Sending Emails",
        description: "Understand how to send emails using PHP's mail function and external libraries.",
        sections: [
            {
                title: "Using the mail() Function",
                content: "The simplest way to send emails in PHP is using the `mail()` function. Specify the recipient, subject, and message.",
                code: `<?php
                    $to = "recipient@example.com";
                    $subject = "Test Email";
                    $message = "This is a test email.";
                    mail($to, $subject, $message);
                    echo "Email sent!";
                ?>`
            },
            {
                title: "Using PHPMailer for Enhanced Functionality",
                content: "PHPMailer is a popular library that provides more features for sending emails, including SMTP support.",
                code: `<?php
                    use PHPMailer\PHPMailer\PHPMailer;
                    require 'vendor/autoload.php';

                    $mail = new PHPMailer();
                    $mail->isSMTP();
                    $mail->Host = 'smtp.example.com';
                    $mail->Username = 'username@example.com';
                    $mail->Password = 'yourpassword';
                    $mail->setFrom('from@example.com', 'Mailer');
                    $mail->addAddress('recipient@example.com');
                    $mail->Subject = 'Test Email';
                    $mail->Body = 'This is a test email using PHPMailer.';
                    $mail->send();
                ?>`
            }
        ],
        pitfalls: [
            "Ensure that your server is configured to send emails; local servers may not support it.",
            "Consider using SMTP for reliable email delivery."
        ],
        summary: "Sending emails in PHP can be done using the built-in mail() function or libraries like PHPMailer for more complex requirements.",
        practiceQuestions: [
            {
                question: "Write a script to send a confirmation email after user registration.",
                hint: "Include relevant user information in the email."
            },
            {
                question: "What are the advantages of using PHPMailer over the mail() function?",
                hint: "Consider aspects like security and functionality."
            },
            {
                question: "How can you handle email delivery failures in your application?",
                hint: "Think about logging failed attempts and user notifications."
            }
        ]
    },
    php_file_uploading: {
        title: "PHP File Uploading",
        description: "Learn how to handle file uploads securely in PHP, including validation and storage.",
        sections: [
            {
                title: "Creating a File Upload Form",
                content: "Create an HTML form with `enctype='multipart/form-data'` to allow file uploads.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="upload.php" method="POST" enctype="multipart/form-data">
                        Select file: <input type="file" name="fileToUpload"><br>
                        <input type="submit" value="Upload">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Handling File Uploads",
                content: "Use the `$_FILES` superglobal to process uploaded files and move them to a designated directory.",
                code: `<?php
                    $target_dir = "uploads/";
                    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                        echo "File uploaded successfully.";
                    } else {
                        echo "Error uploading file.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Validate file types and sizes to prevent malicious uploads.",
            "Set appropriate permissions on the upload directory."
        ],
        summary: "File uploading in PHP involves creating a form, processing the uploaded file, and ensuring security during the upload process.",
        practiceQuestions: [
            {
                question: "Enhance the file upload process to validate the file type and size.",
                hint: "Consider using `mime_content_type()` for type checking."
            },
            {
                question: "Explain how to create a thumbnail for uploaded images using PHP.",
                hint: "Think about using GD library functions."
            },
            {
                question: "What steps would you take to secure your file upload system?",
                hint: "Consider user permissions and file validation techniques."
            }
        ]
    },
    php_filters_error_handling: {
        title: "PHP Filters and Error Handling",
        description: "Explore how to use filters for data validation and implement error handling in PHP applications.",
        sections: [
            {
                title: "Using PHP Filters",
                content: "PHP provides built-in filters for validating and sanitizing data. Use `filter_var()` to apply filters.",
                code: `<?php
                    $email = "test@example.com";
                    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        echo "Valid email.";
                    } else {
                        echo "Invalid email.";
                    }
                ?>`
            },
            {
                title: "Implementing Error Handling",
                content: "Use try-catch blocks for exception handling and set custom error handlers.",
                code: `<?php
                    set_error_handler("customError");
                    function customError($errno, $errstr) {
                        echo "Error: [$errno] $errstr";
                    }

                    // Trigger error
                    echo($test);
                ?>`
            }
        ],
        pitfalls: [
            "Always validate and sanitize user input to avoid security risks.",
            "Handle exceptions properly to improve user experience."
        ],
        summary: "PHP filters help validate and sanitize data, while error handling ensures your application can manage unexpected situations gracefully.",
        practiceQuestions: [
            {
                question: "Create a filter for validating URLs and test various inputs.",
                hint: "Use `FILTER_VALIDATE_URL` to validate URLs."
            },
            {
                question: "How can you log errors to a file instead of displaying them?",
                hint: "Consider using the `error_log()` function."
            },
            {
                question: "What is the difference between warnings and exceptions in PHP?",
                hint: "Consider how each is handled by the interpreter."
            }
        ]
    },
    php_classes: {
        title: "Defining PHP Classes",
        description: "Learn how to define classes in PHP, encapsulating properties and methods.",
        sections: [
            {
                title: "Basic Class Definition",
                content: "Classes in PHP are defined using the `class` keyword. You can create properties and methods within the class.",
                code: `<?php
                    class Car {
                        public $color;
                        public $model;

                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }
                    }
                ?>`
            },
            {
                title: "Access Modifiers",
                content: "PHP supports three access modifiers: public, private, and protected, controlling the visibility of properties and methods.",
                code: `<?php
                    class Car {
                        private $engine;

                        public function setEngine($engine) {
                            $this->engine = $engine;
                        }

                        public function getEngine() {
                            return $this->engine;
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Avoid using global variables inside classes to maintain encapsulation.",
            "Be careful with access modifiers to prevent unintended access to sensitive data."
        ],
        summary: "Defining classes in PHP allows for object-oriented programming, promoting better organization and reuse of code.",
        practiceQuestions: [
            {
                question: "Define a class called `Book` with properties for title and author.",
                hint: "Include methods to set and get these properties."
            },
            {
                question: "Explain the difference between public, private, and protected properties in a class.",
                hint: "Consider how they affect access from outside the class."
            },
            {
                question: "Create a class `User` with a private property for email and a method to return the email.",
                hint: "Ensure the property cannot be accessed directly from outside."
            }
        ]
    },
    php_objects: {
        title: "Creating and Using Objects",
        description: "Discover how to create instances of classes and use them in your PHP applications.",
        sections: [
            {
                title: "Instantiating Objects",
                content: "To create an object, use the `new` keyword followed by the class name.",
                code: `<?php
                    $myCar = new Car("red", "Toyota");
                    echo $myCar->color; // Outputs: red
                ?>`
            },
            {
                title: "Using Object Methods",
                content: "You can call methods on objects using the arrow operator (`->`).",
                code: `<?php
                    class Car {
                        public function start() {
                            return "Car started";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Car started
                ?>`
            }
        ],
        pitfalls: [
            "Ensure you are instantiating the correct class to avoid errors.",
            "Be aware of scope when accessing object properties and methods."
        ],
        summary: "Creating and using objects in PHP allows for structured and reusable code, encapsulating related data and behavior.",
        practiceQuestions: [
            {
                question: "Create an object from the `Car` class and call a method to display its color.",
                hint: "Use the constructor to set the color."
            },
            {
                question: "What happens if you try to access a private property from outside the class?",
                hint: "Think about the access restrictions of private properties."
            },
            {
                question: "Demonstrate how to create multiple objects from the same class.",
                hint: "Instantiate the class multiple times with different values."
            }
        ]
    },
    php_member_functions: {
        title: "Calling Member Functions",
        description: "Learn how to define and call member functions in PHP classes.",
        sections: [
            {
                title: "Defining Member Functions",
                content: "Member functions are defined within a class and can be called on instances of the class.",
                code: `<?php
                    class Car {
                        public function drive() {
                            return "Driving the car!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(); // Outputs: Driving the car!
                ?>`
            },
            {
                title: "Function Parameters",
                content: "Member functions can accept parameters to perform operations based on input.",
                code: `<?php
                    class Car {
                        public function drive($speed) {
                            return "Driving at $speed km/h.";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(100); // Outputs: Driving at 100 km/h.
                ?>`
            }
        ],
        pitfalls: [
            "Ensure you are calling the correct method on the right object.",
            "Be cautious with parameters; validate them if necessary."
        ],
        summary: "Calling member functions in PHP allows you to define behavior associated with an object, enhancing code reusability.",
        practiceQuestions: [
            {
                question: "Create a member function in the `Car` class that calculates fuel efficiency based on distance and fuel used.",
                hint: "Use parameters to pass distance and fuel."
            },
            {
                question: "Explain how you would use default parameter values in a member function.",
                hint: "Consider the use of optional parameters."
            },
            {
                question: "Demonstrate method overloading in PHP.",
                hint: "Think about how to handle different parameter types."
            }
        ]
    },
    php_constructor_functions: {
        title: "Constructor Functions",
        description: "Understand the role of constructor functions in initializing object properties.",
        sections: [
            {
                title: "Creating a Constructor",
                content: "A constructor is a special method that is automatically called when an object is instantiated.",
                code: `<?php
                    class Car {
                        public $color;
                        public $model;

                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }
                    }

                    $myCar = new Car("blue", "Honda");
                    echo $myCar->color; // Outputs: blue
                ?>`
            },
            {
                title: "Constructor Overloading",
                content: "PHP does not support constructor overloading directly, but you can use default parameters.",
                code: `<?php
                    class Car {
                        public $color;

                        function __construct($color = "red") {
                            $this->color = $color;
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->color; // Outputs: red
                ?>`
            }
        ],
        pitfalls: [
            "Ensure constructors are used to initialize necessary properties.",
            "Be cautious with circular dependencies in constructors."
        ],
        summary: "Constructor functions are essential for setting initial state in objects, allowing for flexibility in object creation.",
        practiceQuestions: [
            {
                question: "Create a constructor that initializes properties for a `Person` class, including name and age.",
                hint: "Use the constructor to set these properties upon instantiation."
            },
            {
                question: "What happens if a class does not have a constructor?",
                hint: "Consider the default behavior of PHP constructors."
            },
            {
                question: "Demonstrate how to use constructor chaining in PHP.",
                hint: "Think about calling another constructor from within a constructor."
            }
        ]
    },
    php_inheritance: {
        title: "Inheritance and Function Overriding",
        description: "Explore how inheritance allows classes to extend functionality and override methods.",
        sections: [
            {
                title: "Understanding Inheritance",
                content: "Inheritance allows a class to inherit properties and methods from another class using the `extends` keyword.",
                code: `<?php
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    class Car extends Vehicle {
                        public function honk() {
                            return "Honk! Honk!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Vehicle started
                ?>`
            },
            {
                title: "Overriding Methods",
                content: "A subclass can override methods from the parent class to provide specific functionality.",
                code: `<?php
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    class Car extends Vehicle {
                        public function start() {
                            return "Car started with a roar!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Car started with a roar!
                ?>`
            }
        ],
        pitfalls: [
            "Be careful with method visibility when overriding; ensure correct access levels.",
            "Avoid deep inheritance hierarchies to maintain code clarity."
        ],
        summary: "Inheritance allows for code reuse and extension, while method overriding enables customization of inherited behavior.",
        practiceQuestions: [
            {
                question: "Create a `Truck` class that extends `Vehicle` and overrides the start method.",
                hint: "Make sure the `Truck` class provides its own implementation."
            },
            {
                question: "What is the purpose of the `parent` keyword in method overriding?",
                hint: "Consider how it can be used to call parent class methods."
            },
            {
                question: "Explain the advantages and disadvantages of inheritance.",
                hint: "Think about code reuse versus potential complexity."
            }
        ]
    },
    php_interfaces_abstract: {
        title: "PHP Interfaces and Abstract Classes",
        description: "Learn how to define interfaces and abstract classes to enforce contracts in your PHP applications.",
        sections: [
            {
                title: "Understanding Interfaces",
                content: "An interface defines a contract that implementing classes must follow, using the `interface` keyword.",
                code: `<?php
                    interface Drivable {
                        public function drive();
                    }

                    class Car implements Drivable {
                        public function drive() {
                            return "Driving the car.";
                        }
                    }
                ?>`
            },
            {
                title: "Using Abstract Classes",
                content: "An abstract class can provide partial implementation and cannot be instantiated directly.",
                code: `<?php
                    abstract class Animal {
                        abstract protected function sound();
                    }

                    class Dog extends Animal {
                        protected function sound() {
                            return "Bark!";
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Interfaces can only contain method signatures; avoid defining properties.",
            "Remember that abstract classes can have both abstract and concrete methods."
        ],
        summary: "Interfaces and abstract classes provide powerful ways to enforce structure and behavior in your PHP applications.",
        practiceQuestions: [
            {
                question: "Define an interface `Shape` with methods for calculating area and perimeter.",
                hint: "Implement this interface in classes like `Circle` and `Square`."
            },
            {
                question: "What is the difference between an abstract class and an interface?",
                hint: "Consider the implications of implementation and instantiation."
            },
            {
                question: "Demonstrate how to implement multiple interfaces in a single class.",
                hint: "Think about how a class can fulfill multiple contracts."
            }
        ]
    },
    mysql_database_basics: {
        title: "Database Basics",
        description: "Understand the fundamentals of databases, including structure, relationships, and basic terminology.",
        sections: [
            {
                title: "What is a Database?",
                content: "A database is an organized collection of data, generally stored and accessed electronically. It allows for efficient storage and retrieval.",
                code: `-- Example of a simple database creation
                CREATE DATABASE school;`
            },
            {
                title: "Database Structure",
                content: "Databases consist of tables, which hold records. Each table is made up of rows and columns.",
                code: `-- Creating a table
                CREATE TABLE students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    age INT
                );`
            }
        ],
        pitfalls: [
            "Don't forget to define primary keys in your tables.",
            "Be cautious about data types to ensure efficient storage."
        ],
        summary: "A solid understanding of database basics is crucial for managing data effectively, laying the foundation for more advanced database operations.",
        practiceQuestions: [
            {
                question: "What are the main components of a database?",
                hint: "Consider the structure and elements that make up a database."
            },
            {
                question: "Explain the difference between a primary key and a foreign key.",
                hint: "Think about how they relate tables in a database."
            },
            {
                question: "Create a simple table for a library system.",
                hint: "Include fields like book title, author, and publication year."
            }
        ]
    },
    phpmyadmin: {
        title: "Using PHPMyAdmin",
        description: "Learn how to manage MySQL databases through PHPMyAdmin, a web-based database management tool.",
        sections: [
            {
                title: "Introduction to PHPMyAdmin",
                content: "PHPMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.",
                code: `-- Access PHPMyAdmin in your web browser at localhost/phpmyadmin`
            },
            {
                title: "Creating a Database",
                content: "To create a database, navigate to the PHPMyAdmin interface and click on the 'Databases' tab.",
                code: `-- In PHPMyAdmin, simply enter the database name and click 'Create'.`
            }
        ],
        pitfalls: [
            "Be careful when performing operations; always back up your database.",
            "Check user permissions if you encounter access issues."
        ],
        summary: "PHPMyAdmin simplifies database management, making it easier to create and manipulate databases without SQL commands.",
        practiceQuestions: [
            {
                question: "How do you create a new database using PHPMyAdmin?",
                hint: "Refer to the user interface and available options."
            },
            {
                question: "What are some common tasks you can perform in PHPMyAdmin?",
                hint: "Think about operations like creating tables or running queries."
            },
            {
                question: "Explain how to export a database from PHPMyAdmin.",
                hint: "Consider the format options available for export."
            }
        ]
    },
    mysql_connect: {
        title: "Connecting to MySQL with PHP",
        description: "Learn how to establish a connection to a MySQL database using PHP.",
        sections: [
            {
                title: "Using MySQLi to Connect",
                content: "MySQLi (MySQL Improved) provides an easy way to connect to a MySQL database.",
                code: `<?php
                    $servername = "localhost";
                    $username = "username";
                    $password = "password";
                    $dbname = "school";

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $dbname);

                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    echo "Connected successfully";
                ?>`
            },
            {
                title: "Using PDO to Connect",
                content: "PHP Data Objects (PDO) is another way to connect to a database that offers a more flexible and secure approach.",
                code: `<?php
                    try {
                        $conn = new PDO("mysql:host=localhost;dbname=school", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo "Connected successfully";
                    } catch (PDOException $e) {
                        echo "Connection failed: " . $e->getMessage();
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always handle connection errors gracefully to avoid revealing sensitive information.",
            "Use prepared statements to prevent SQL injection attacks."
        ],
        summary: "Connecting to a MySQL database with PHP is essential for data manipulation and retrieval in web applications.",
        practiceQuestions: [
            {
                question: "Write a PHP script to connect to a MySQL database using MySQLi.",
                hint: "Use the `new mysqli` constructor with proper parameters."
            },
            {
                question: "What are the advantages of using PDO over MySQLi?",
                hint: "Consider aspects like flexibility and error handling."
            },
            {
                question: "Explain how to handle connection errors in PHP.",
                hint: "Think about using try-catch blocks."
            }
        ]
    },
    mysql_crud_operations: {
        title: "MySQL CRUD Operations",
        description: "Understand the basics of CRUD operations: Create, Read, Update, and Delete in MySQL.",
        sections: [
            {
                title: "Creating Records",
                content: "To create a new record, use the `INSERT INTO` statement.",
                code: `<?php
                    $sql = "INSERT INTO students (name, age) VALUES ('John Doe', 20)";
                    if ($conn->query($sql) === TRUE) {
                        echo "New record created successfully";
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                ?>`
            },
            {
                title: "Reading Records",
                content: "To read records, use the `SELECT` statement.",
                code: `<?php
                    $sql = "SELECT * FROM students";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "0 results";
                    }
                ?>`
            },
            {
                title: "Updating Records",
                content: "To update a record, use the `UPDATE` statement.",
                code: `<?php
                    $sql = "UPDATE students SET age=21 WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record updated successfully";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                ?>`
            },
            {
                title: "Deleting Records",
                content: "To delete a record, use the `DELETE FROM` statement.",
                code: `<?php
                    $sql = "DELETE FROM students WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record deleted successfully";
                    } else {
                        echo "Error deleting record: " . $conn->error;
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always validate user input to avoid SQL injection.",
            "Be cautious with DELETE operations; consider using WHERE clauses carefully."
        ],
        summary: "CRUD operations form the backbone of database interactions, enabling the full cycle of data management in applications.",
        practiceQuestions: [
            {
                question: "Write SQL commands to insert, select, update, and delete records in a `products` table.",
                hint: "Consider a structure for the `products` table with at least three fields."
            },
            {
                question: "How can you prevent SQL injection when performing CRUD operations?",
                hint: "Think about using prepared statements."
            },
            {
                question: "What are the consequences of running a DELETE statement without a WHERE clause?",
                hint: "Consider the impact on data integrity."
            }
        ]
    },
    mysql_where_orderby_groupby: {
        title: "Using WHERE, Order By, and Group By",
        description: "Learn how to filter, sort, and group records in MySQL queries for better data management.",
        sections: [
            {
                title: "Using WHERE Clause",
                content: "The `WHERE` clause is used to filter records based on specific conditions.",
                code: `<?php
                    $sql = "SELECT * FROM students WHERE age > 18";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using ORDER BY",
                content: "The `ORDER BY` clause is used to sort the result set by one or more columns.",
                code: `<?php
                    $sql = "SELECT * FROM students ORDER BY age ASC";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using GROUP BY",
                content: "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows.",
                code: `<?php
                    $sql = "SELECT age, COUNT(*) as count FROM students GROUP BY age";
                    $result = $conn->query($sql);
                ?>`
            }
        ],
        pitfalls: [
            "Be mindful of using GROUP BY without aggregate functions.",
            "Remember that ORDER BY can affect performance; use it wisely."
        ],
        summary: "Understanding how to use WHERE, ORDER BY, and GROUP BY effectively allows for more powerful and meaningful data retrieval in SQL.",
        practiceQuestions: [
            {
                question: "Write a SQL query to select students with ages between 18 and 25, ordered by name.",
                hint: "Utilize both WHERE and ORDER BY clauses."
            },
            {
                question: "Explain how GROUP BY works with aggregate functions.",
                hint: "Consider the implications of counting or summing grouped data."
            },
            {
                question: "What happens if you use GROUP BY without an aggregate function?",
                hint: "Think about the output you would receive."
            }
        ]
    },
    sql_aggregate_functions: {
        title: "SQL Aggregate Functions",
        description: "Learn about SQL aggregate functions such as COUNT, SUM, AVG, MIN, and MAX for data analysis.",
        sections: [
            {
                title: "Using COUNT",
                content: "The `COUNT` function returns the number of rows that match a specified condition.",
                code: `<?php
                    $sql = "SELECT COUNT(*) as total_students FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using SUM",
                content: "The `SUM` function returns the total sum of a numeric column.",
                code: `<?php
                    $sql = "SELECT SUM(age) as total_age FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using AVG",
                content: "The `AVG` function returns the average value of a numeric column.",
                code: `<?php
                    $sql = "SELECT AVG(age) as average_age FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using MIN and MAX",
                content: "The `MIN` and `MAX` functions return the minimum and maximum values in a set.",
                code: `<?php
                    $sql = "SELECT MIN(age) as youngest, MAX(age) as oldest FROM students";
                    $result = $conn->query($sql);
                ?>`
            }
        ],
        pitfalls: [
            "Always check for NULL values when using aggregate functions.",
            "Understand the difference between aggregate functions and regular queries."
        ],
        summary: "SQL aggregate functions are essential for analyzing data, allowing for insightful summaries and reports.",
        practiceQuestions: [
            {
                question: "Write a query to find the total number of students and their average age.",
                hint: "Combine COUNT and AVG in a single query."
            },
            {
                question: "How would you find the youngest and oldest student in the database?",
                hint: "Utilize the MIN and MAX functions."
            },
            {
                question: "What happens if you use aggregate functions without a GROUP BY clause?",
                hint: "Consider the result set that is returned."
            }
        ]
    }
};
