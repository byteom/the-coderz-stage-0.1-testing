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
   
    "php_form_handling": {
        "title": "PHP Form Handling",
        "description": "Learn how to handle form submissions in PHP, including retrieving and processing user input, validating data, and preventing common issues like XSS and SQL injection.",
        "sections": [
            {
                "title": "Creating a Basic HTML Form",
                "content": "To handle form data, first create an HTML form using the `form` tag. Specify the method (`GET` or `POST`) for submitting data. The method determines how the form data is sent to the server. `POST` is commonly used for sensitive data since it doesn't expose the data in the URL.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="process.php" method="POST">
                        Name: <input type="text" name="name"><br>
                        Email: <input type="email" name="email"><br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>`
            },
            {
                "title": "Processing Form Data in PHP",
                "content": "Use the global `$_POST` or `$_GET` arrays to access submitted form data in your PHP script. The `$_POST` method is generally used for sending sensitive or large amounts of data, while `$_GET` is used for retrieving data with URLs.",
                "code": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = $_POST["name"];
                        $email = $_POST["email"];
                        echo "Hello, $name! Your email is $email.";
                    }
                ?>`
            },
            {
                "title": "Form Validation",
                "content": "Always validate the user input to ensure it's correct and secure. Use `empty()` to check if a required field is left blank. Regular expressions can be used for pattern matching, like checking if an email is valid.",
                "code": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = $_POST["name"];
                        $email = $_POST["email"];
                        if (empty($name)) {
                            echo "Name is required.<br>";
                        } else {
                            echo "Hello, $name!<br>";
                        }
                        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                            echo "Invalid email format.<br>";
                        } else {
                            echo "Your email is $email.<br>";
                        }
                    }
                ?>`
            },
            {
                "title": "Sanitizing Input Data",
                "content": "To prevent malicious input (like XSS or SQL injection), always sanitize user input. Use `htmlspecialchars()` to prevent XSS, and use prepared statements or `mysqli_real_escape_string()` for SQL queries to protect against SQL injection.",
                "code": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = htmlspecialchars($_POST["name"]);
                        $email = htmlspecialchars($_POST["email"]);
                        echo "Hello, $name! Your email is $email.";
                    }
                ?>`
            },
            {
                "title": "Using `$_GET` for Simple Data Retrieval",
                "content": "`$_GET` is used to collect form data after submitting an HTML form with the method `GET`. This method appends the data to the URL and can be bookmarked. It's useful for non-sensitive data like search queries.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="process.php" method="GET">
                        Name: <input type="text" name="name"><br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>`,
                "code_php": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "GET") {
                        $name = $_GET["name"];
                        echo "Hello, $name!";
                    }
                ?>`
            },
            {
                "title": "Handling Multiple Form Fields",
                "content": "You can handle multiple fields in a single form. To process the data from various input fields, access each field through its name attribute, which corresponds to the key in the `$_POST` or `$_GET` array.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="process.php" method="POST">
                        Name: <input type="text" name="name"><br>
                        Age: <input type="number" name="age"><br>
                        Gender: 
                        <input type="radio" name="gender" value="Male"> Male
                        <input type="radio" name="gender" value="Female"> Female<br>
                        Interests: <br>
                        <input type="checkbox" name="interests[]" value="Sports"> Sports
                        <input type="checkbox" name="interests[]" value="Music"> Music
                        <input type="checkbox" name="interests[]" value="Traveling"> Traveling<br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>`,
                "code_php": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = $_POST["name"];
                        $age = $_POST["age"];
                        $gender = $_POST["gender"];
                        $interests = isset($_POST["interests"]) ? implode(", ", $_POST["interests"]) : "None";
                        echo "Name: $name<br>Age: $age<br>Gender: $gender<br>Interests: $interests";
                    }
                ?>`
            },
            {
                "title": "File Upload Handling",
                "content": "To allow users to upload files through a form, use the `enctype='multipart/form-data'` attribute in the form tag. Use the `$_FILES` global array to handle the uploaded file and store it safely on the server.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="upload.php" method="POST" enctype="multipart/form-data">
                        Select file: <input type="file" name="fileToUpload"><br>
                        <input type="submit" value="Upload">
                    </form>
                </body>
                </html>`,
                "code_php": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $target_dir = "uploads/";
                        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                            echo "The file ". htmlspecialchars(basename($_FILES["fileToUpload"]["name"])). " has been uploaded.";
                        } else {
                            echo "Sorry, there was an error uploading your file.";
                        }
                    }
                ?>`
            }
        ],
        "pitfalls": [
            "Make sure the `action` attribute points to the correct PHP file for processing.",
            "Be aware of the method (`GET` or `POST`) used to submit the form, as it affects how data is accessed.",
            "Always sanitize and validate user input to prevent security issues like XSS and SQL injection.",
            "Ensure that file upload directories have proper permissions and security checks (e.g., file size, type).",
            "Avoid using `$_GET` for sensitive data as it exposes the data in the URL."
        ],
        "summary": "PHP form handling involves creating HTML forms, submitting data using the `GET` or `POST` method, and processing the data using PHP. Validation, sanitization, and proper handling of file uploads and multiple form fields are essential for security and functionality.",
        "practiceQuestions": [
            {
                "question": "Create a form that collects a user's email, phone number, and gender, and processes the data in PHP.",
                "hint": "Make sure to validate the email and phone number formats, and handle gender using radio buttons."
            },
            {
                "question": "How can you display an error message if any required field is left empty after form submission?",
                "hint": "Use `empty()` to check if the field is empty, and display an error message accordingly."
            },
            {
                "question": "Explain the importance of file upload security in PHP forms.",
                "hint": "Consider aspects like allowed file types, file size limits, and storing files in a secure directory."
            },
            {
                "question": "What is the difference between `$_POST` and `$_GET` methods in PHP? When would you use one over the other?",
                "hint": "Think about the use case scenarios for sensitive data and data visibility in the URL."
            },
            {
                "question": "How would you prevent SQL injection when handling form submissions?",
                "hint": "Use prepared statements or `mysqli_real_escape_string()` to sanitize user input before inserting it into the database."
            }
        ]
    },
      "php_get_post": {
        "title": "PHP GET and POST",
        "description": "Understand the differences between the GET and POST methods for sending data to a server. Learn when and how to use each method based on data type, security concerns, and performance considerations.",
        "sections": [
            {
                "title": "Using the GET Method",
                "content": "The `GET` method appends data to the URL in name-value pairs, making it visible to anyone who can view the URL. This method is best suited for non-sensitive data, such as search queries, filter options, or pagination. Since the data is visible in the URL, it's not recommended for sensitive information like passwords.",
                "code": `<?php
                    // Accessing data sent via GET
                    if ($_SERVER["REQUEST_METHOD"] == "GET") {
                        if (isset($_GET["name"])) {
                            $name = $_GET["name"];
                            echo "Hello, $name!";
                        } else {
                            echo "No name provided.";
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Sensitive data (e.g., passwords, personal information) should never be sent using the GET method, as it is exposed in the URL.",
                    "GET requests have a limited data size due to URL length restrictions (usually around 2048 characters)."
                ]
            },
            {
                "title": "Using the POST Method",
                "content": "The `POST` method sends data in the request body, which is not visible in the URL and has no size limitations (other than server configuration). This makes POST suitable for sensitive data such as passwords, user details, and file uploads. Unlike GET, POST is more secure because the data is not displayed in the browser's address bar.",
                "code": `<?php
                    // Accessing data sent via POST
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (isset($_POST["password"])) {
                            $password = $_POST["password"];
                            echo "Password received.";
                        } else {
                            echo "No password provided.";
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Although POST is more secure than GET, it is still important to validate and sanitize user input to prevent security vulnerabilities like SQL injection.",
                    "You should always use HTTPS when sending sensitive data via POST to ensure encryption during transmission."
                ]
            },
            {
                "title": "Data Size and Performance Considerations",
                "content": "When choosing between GET and POST, it's important to consider the amount of data being transmitted. GET has limitations on data size because it appends data to the URL. POST, on the other hand, has no practical limit (aside from server configuration), which makes it better for larger data submissions, such as file uploads or complex form submissions.",
                "code": `<?php
                    // Example of large data submission using POST
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $data = $_POST["largeData"];
                        echo "Large data received: $data";
                    }
                ?>`,
                "pitfalls": [
                    "Avoid sending large amounts of data via GET as URLs have size limitations (around 2048 characters). POST is better for large form submissions and file uploads."
                ]
            },
            {
                "title": "Security Considerations",
                "content": "While POST is generally more secure than GET, both methods require careful handling to avoid security risks. With GET, the data is visible in the browser’s address bar, which can be intercepted or logged by third parties. With POST, although data is not visible in the URL, it is still vulnerable to interception if transmitted over an unencrypted connection. Always use HTTPS to secure the data during transmission, regardless of the method.",
                "code": `<?php
                    // Ensuring security: Always validate and sanitize user inputs
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (isset($_POST["username"])) {
                            $username = htmlspecialchars($_POST["username"]);
                            echo "Username received: $username";
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Never trust user input. Always sanitize and validate data to prevent XSS and SQL injection attacks.",
                    "Ensure that both GET and POST data are transmitted over HTTPS to protect it from being intercepted."
                ]
            },
            {
                "title": "Using GET and POST Together",
                "content": "In some scenarios, you might use both GET and POST methods on the same page. For instance, you can use GET to pass non-sensitive data such as filter parameters, and POST to submit sensitive form data. It's important to keep the functionality clear and secure, and not mix sensitive and non-sensitive data in the same request if possible.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <!-- Using GET for non-sensitive data like search term -->
                    <form action="process.php" method="GET">
                        Search: <input type="text" name="search"><br>
                        <input type="submit" value="Search">
                    </form>
                    <hr>
                    <!-- Using POST for sensitive data like login -->
                    <form action="process.php" method="POST">
                        Username: <input type="text" name="username"><br>
                        Password: <input type="password" name="password"><br>
                        <input type="submit" value="Login">
                    </form>
                </body>
                </html>`,
                "code_php": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["search"])) {
                        $search = htmlspecialchars($_GET["search"]);
                        echo "Searching for: $search";
                    }
                    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["username"])) {
                        $username = htmlspecialchars($_POST["username"]);
                        echo "Welcome, $username!";
                    }
                ?>`,
                "pitfalls": [
                    "Mixing GET and POST data on the same page could confuse users or lead to security issues if not handled carefully.",
                    "Ensure that sensitive information is never passed through the URL in GET requests."
                ]
            }
        ],
        "pitfalls": [
            "Be cautious with sensitive information; avoid using GET for passwords or other private data.",
            "GET requests have limitations on data size (around 2048 characters), while POST can handle much larger amounts of data.",
            "Always use HTTPS for transmitting sensitive data to ensure encryption.",
            "Ensure proper input validation and sanitization to protect against security threats like XSS and SQL injection."
        ],
        "summary": "GET and POST are the two most commonly used methods for sending data in PHP. GET appends data to the URL, making it suitable for non-sensitive data, while POST sends data in the request body and is better for sensitive or large data. When implementing either method, consider security, data size, and performance requirements.",
        "practiceQuestions": [
            {
                "question": "Create a form that collects a user's username, password, and email using the POST method. Display the received data after submission.",
                "hint": "Use `$_POST` to handle form data and ensure the password is securely processed."
            },
            {
                "question": "What are the limitations of the GET method, and how can they impact user experience in a web application?",
                "hint": "Consider URL length limits, data exposure, and performance when submitting large or sensitive data."
            },
            {
                "question": "Explain how you would secure a POST request containing sensitive data like a password.",
                "hint": "Ensure the form is submitted over HTTPS, and validate and sanitize all inputs to prevent SQL injection or XSS attacks."
            },
            {
                "question": "Why is it important to avoid sending sensitive data using the GET method, and what security risks does it present?",
                "hint": "Think about how GET exposes data in the URL and the potential for interception or logging."
            },
            {
                "question": "Describe a scenario where using both GET and POST methods on the same page is appropriate. How would you secure the data being submitted?",
                "hint": "Use GET for non-sensitive data like search queries and POST for sensitive data like login credentials. Ensure both are submitted over HTTPS."
            }
        ]
    },
   "php_form_validation": {
        "title": "PHP Form Validation",
        "description": "Learn how to validate user input from forms to ensure data integrity, prevent security issues, and improve user experience. This guide covers basic validation techniques, error handling, and using regular expressions for more advanced validation.",
        "sections": [
            {
                "title": "Validating Input Data",
                "content": "Input validation is crucial for ensuring that the data submitted via forms meets the expected criteria before it is processed. This prevents unwanted data from being processed and helps safeguard against security vulnerabilities. For example, checking if a field is empty or if a value is of the correct type (e.g., numeric, string, etc.).",
                "code": `<?php
                    $name = "";
                    $error = "";

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (empty($_POST["name"])) {
                            $error = "Name is required";
                        } else {
                            $name = htmlspecialchars($_POST["name"]);
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Always check for empty fields and validate user inputs before processing them.",
                    "Do not rely solely on client-side validation; always validate on the server side as well to prevent bypassing."
                ]
            },
            {
                "title": "Using Regular Expressions for Validation",
                "content": "Regular expressions (regex) are powerful tools for validating data formats such as email addresses, phone numbers, and URLs. They provide a pattern to match the data, ensuring that it adheres to a specified format. For example, validating an email address with a regex can check for the presence of `@` and a domain, ensuring that the email is in a proper format.",
                "code": `<?php
                    if (!preg_match("/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/", $_POST["email"])) {
                        $error = "Invalid email format";
                    }
                ?>`,
                "pitfalls": [
                    "Regular expressions can be complex and hard to maintain. Keep them simple and readable.",
                    "Ensure that your regular expression is designed to handle edge cases, such as uncommon but valid email addresses."
                ]
            },
            {
                "title": "Validating Numeric Input",
                "content": "For certain fields, such as age or price, it's important to validate that the input is a number within a specific range. This can be done using `is_numeric()` to check if the input is a number and performing range checks to ensure it is within acceptable limits.",
                "code": `<?php
                    if (isset($_POST["age"])) {
                        $age = $_POST["age"];
                        if (!is_numeric($age)) {
                            $error = "Age must be a number";
                        } elseif ($age < 18) {
                            $error = "You must be at least 18 years old";
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Always ensure numeric inputs are sanitized and validated to avoid unexpected behavior or security vulnerabilities.",
                    "Be cautious about handling large numbers or floating-point precision."
                ]
            },
            {
                "title": "Validating Date Input",
                "content": "For date fields, you can use PHP’s built-in `checkdate()` function, which checks if a given date is valid according to the month, day, and year. This is useful for ensuring that users provide valid dates (e.g., not February 30th).",
                "code": `<?php
                    if (isset($_POST["date"])) {
                        $date = $_POST["date"];
                        $date_parts = explode("-", $date);
                        if (count($date_parts) == 3 && checkdate($date_parts[1], $date_parts[2], $date_parts[0])) {
                            echo "Valid date";
                        } else {
                            $error = "Invalid date format";
                        }
                    }
                ?>`,
                "pitfalls": [
                    "Make sure the date format is consistent with the input format (e.g., YYYY-MM-DD).",
                    "Consider timezone differences if the application is global."
                ]
            },
            {
                "title": "Error Handling and Displaying Validation Messages",
                "content": "It's essential to handle errors gracefully and display helpful error messages to the user. This enhances user experience and helps them correct invalid input. You can display errors next to the corresponding fields, ensuring that users understand what needs to be fixed.",
                "code": `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (empty($_POST["name"])) {
                            $error = "Name is required";
                        } else {
                            $name = htmlspecialchars($_POST["name"]);
                        }
                    }
                    if (!empty($error)) {
                        echo "<div class='error'>$error</div>";
                    }
                ?>`,
                "pitfalls": [
                    "Avoid exposing internal validation logic in error messages. Keep messages user-friendly and avoid technical jargon.",
                    "Ensure that validation messages are displayed clearly and not hidden or overlooked by the user."
                ]
            },
            {
                "title": "Sanitizing Input Data",
                "content": "Sanitization is the process of cleaning user input to remove unwanted characters or scripts. For example, using `htmlspecialchars()` to prevent cross-site scripting (XSS) attacks by encoding special characters. Always sanitize data before using it in your application, especially if it's displayed on web pages or stored in a database.",
                "code": `<?php
                    $name = htmlspecialchars($_POST["name"]);
                    echo "Hello, $name!";
                ?>`,
                "pitfalls": [
                    "Never trust user input. Always sanitize it to avoid security vulnerabilities like XSS and SQL injection.",
                    "Ensure that sanitization functions are applied to all user-supplied data before using or displaying it."
                ]
            }
        ],
        "pitfalls": [
            "Always sanitize user input to prevent XSS attacks and other vulnerabilities.",
            "Be specific about the validation criteria, and provide clear error messages to the user.",
            "Don't rely solely on client-side validation. Server-side validation is essential for security.",
            "Use regular expressions with caution, as they can be complex and might not always be efficient."
        ],
        "summary": "Form validation in PHP ensures that the data submitted by users is accurate, secure, and meets the expected criteria. It involves checking for empty fields, validating formats with regular expressions, handling errors, and sanitizing input to protect against attacks like XSS.",
        "practiceQuestions": [
            {
                "question": "Create a form that validates a user's age to ensure they are at least 18 years old. Include a clear error message for invalid inputs.",
                "hint": "Use `is_numeric()` to check if the input is a number and then compare it to the age requirement."
            },
            {
                "question": "How can you use the `htmlspecialchars()` function to prevent XSS attacks in user input?",
                "hint": "Think about how user input might contain special characters and how encoding them can prevent script execution."
            },
            {
                "question": "Explain how you would validate a date input to ensure that it's a valid calendar date (e.g., February 30th should be invalid).",
                "hint": "Use `checkdate()` to validate the date after splitting the input into day, month, and year."
            },
            {
                "question": "What are some common mistakes in form validation that could lead to security vulnerabilities?",
                "hint": "Consider what might happen if you don't sanitize user input or if you rely solely on client-side validation."
            },
            {
                "question": "How would you handle form validation for an email address, and what security measures would you take?",
                "hint": "Use regular expressions to check the email format and always sanitize the input to prevent malicious data."
            }
        ]
    },
    "php_form_sanitization": {
        "title": "PHP Form Sanitization",
        "description": "Understand the importance of sanitizing user input to prevent security vulnerabilities and enhance the safety of web applications.",
        "sections": [
            {
                "title": "What is Sanitization?",
                "content": "Sanitization is the process of cleaning user input by removing unwanted characters, scripts, or malicious data. It's essential to prevent various security vulnerabilities, such as Cross-Site Scripting (XSS) and SQL injection. When a user submits data, it might contain characters or scripts that could compromise the security of your website or application. Sanitization ensures that only safe and valid data is processed, thus improving the overall security of your website.",
                "code": "<?php\n$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);\n?>"
            },
            {
                "title": "Sanitizing with Built-in Functions",
                "content": "PHP provides various built-in functions that help sanitize data before processing it. One of the most commonly used functions is `filter_var()`, which can sanitize input based on predefined filters. For example, `FILTER_SANITIZE_EMAIL` removes unwanted characters from an email address to ensure it adheres to a valid format, while `FILTER_SANITIZE_STRING` removes special characters that may be used in an XSS attack. These filters help ensure that the data entered by the user is safe to use in your application.",
                "code": "<?php\n$email = filter_var($_POST[\"email\"], FILTER_SANITIZE_EMAIL);\n$name = filter_var($_POST[\"name\"], FILTER_SANITIZE_STRING);\n?>"
            },
            {
                "title": "Sanitizing URLs and HTML",
                "content": "When dealing with URLs or HTML content, sanitization becomes especially critical to prevent malicious content such as script tags from executing. PHP provides `FILTER_SANITIZE_URL` for sanitizing URLs and `FILTER_SANITIZE_FULL_SPECIAL_CHARS` for encoding HTML special characters. This prevents attackers from injecting malicious scripts into your website. For instance, the use of `htmlspecialchars()` is a common approach to convert special characters like `<`, `>`, and `&` into their HTML entities, which prevents browsers from interpreting them as code.",
                "code": "<?php\n$url = filter_var($_POST[\"url\"], FILTER_SANITIZE_URL);\n$htmlContent = htmlspecialchars($_POST[\"content\"], ENT_QUOTES, 'UTF-8');\n?>"
            },
            {
                "title": "Advanced Sanitization Techniques",
                "content": "In some cases, built-in functions might not be sufficient for sanitizing complex data. For example, user-uploaded files require more stringent checks to ensure they don’t contain malicious code. It's important to validate the file type, size, and other properties before accepting it into your system. Additionally, the use of `htmlspecialchars()` can be employed to sanitize HTML input. You might also want to use regular expressions for more customized sanitization rules. In such cases, you can create your own sanitization functions based on specific needs.",
                "code": "<?php\n$filename = $_FILES[\"userfile\"][\"name\"];\nif (preg_match(\"/^[a-zA-Z0-9_\\-]+\\.jpg$\", $filename)) {\n    // File is safe\n} else {\n    // Invalid file type\n}\n?>"
            },
            {
                "title": "Why Sanitization is Crucial for Security",
                "content": "Failing to sanitize user input can lead to severe security issues, such as XSS attacks and SQL injection. In an XSS attack, malicious scripts injected into a webpage are executed by users’ browsers, potentially stealing sensitive information or compromising the website. SQL injection occurs when unsanitized data is inserted into an SQL query, allowing attackers to manipulate the database. Sanitizing user input helps prevent these attacks by ensuring that any potentially dangerous characters or scripts are removed before processing.",
                "code": "<?php\n$unsafeInput = $_POST[\"comment\"];\n// Without sanitization\n$query = \"INSERT INTO comments (content) VALUES ('$unsafeInput')\";\n// With sanitization\n$safeInput = filter_var($unsafeInput, FILTER_SANITIZE_STRING);\n$query = \"INSERT INTO comments (content) VALUES ('$safeInput')\";\n?>"
            }
        ],
        "pitfalls": [
            "Sanitization should not be confused with validation. While sanitization removes unwanted characters, validation ensures that the input meets certain criteria (e.g., a valid email address or phone number). Both are necessary to ensure data integrity and security.",
            "Don't rely on sanitization alone to protect your site. Use it in combination with other security measures like escaping output, prepared statements for SQL queries, and regular security audits.",
            "Always sanitize data before using it in SQL queries to prevent SQL injection. Even if you're using an ORM (Object-Relational Mapping) tool, sanitization adds an additional layer of protection."
        ],
        "summary": "Sanitization in PHP involves cleaning user input to remove potentially harmful data, such as scripts or malicious characters. PHP provides a variety of functions like `filter_var()` and `htmlspecialchars()` to help sanitize input, reducing the risk of security vulnerabilities like XSS and SQL injection. Sanitization should always be used in combination with validation to ensure data integrity and application security.",
        "practiceQuestions": [
            {
                "question": "Demonstrate how to sanitize user input from a contact form before processing it. Include sanitization for email, name, and a message field.",
                "hint": "Use the appropriate filter functions like `FILTER_SANITIZE_EMAIL` for the email field and `FILTER_SANITIZE_STRING` for name and message fields."
            },
            {
                "question": "What is the difference between sanitization and validation in PHP? Provide examples of when each should be used.",
                "hint": "Think about the goals of sanitization (removing unwanted characters) vs. validation (ensuring input meets certain criteria)."
            },
            {
                "question": "Explain why it is important to sanitize data before storing it in a database, and how this prevents SQL injection attacks.",
                "hint": "Consider what could happen if a user submits malicious input and how sanitization helps prevent these risks."
            },
            {
                "question": "Create a function that sanitizes user input for multiple fields (e.g., name, email, and message) and returns the sanitized data.",
                "hint": "Create a custom sanitization function using built-in PHP functions like `filter_var()` for each input field."
            },
            {
                "question": "How can you use regular expressions for more advanced sanitization, especially for validating phone numbers or postal codes?",
                "hint": "Think about how regular expressions allow you to define specific patterns for acceptable data formats."
            }
        ]
    },
    
    "php_cookie_handling": {
        "title": "PHP Cookie Handling",
        "description": "Learn how to set, retrieve, and manage cookies in PHP to store user preferences, session data, and improve user experience across multiple visits.",
        "sections": [
            {
                "title": "Setting Cookies",
                "content": "In PHP, cookies are set using the `setcookie()` function. A cookie is a small piece of data that the server sends to the user's browser, which is then stored locally on the user's device. The cookie is sent with each subsequent request to the server. The `setcookie()` function takes several parameters: the cookie name, its value, the expiration time, the path, the domain, and security flags (like `HttpOnly` and `Secure`). It's important to note that cookies must be set before any output is sent to the browser.",
                "code": `<?php
                    setcookie("username", "JohnDoe", time() + (86400 * 30), "/", "", true, true); // Secure cookie with HttpOnly flag
                    echo "Cookie 'username' is set!";
                ?>`,
                "explanation": "In the example above, the cookie is set with the name 'username' and a value of 'JohnDoe'. The cookie will expire in 30 days, will be available across the entire site (indicated by '/'), and will be sent only over secure HTTPS connections (`true` for the Secure flag). The HttpOnly flag ensures the cookie can't be accessed via JavaScript, which helps protect against cross-site scripting (XSS) attacks."
            },
            {
                "title": "Retrieving Cookies",
                "content": "To retrieve the value of a cookie, you access the `$_COOKIE` superglobal array in PHP. This array holds all the cookies sent by the client. If the cookie exists, its value will be returned; if not, a default message or error can be shown. It's important to check if the cookie exists before trying to use its value to prevent errors.",
                "code": `<?php
                    if (isset($_COOKIE["username"])) {
                        echo "Username: " . $_COOKIE["username"];
                    } else {
                        echo "Cookie 'username' not found.";
                    }
                ?>`,
                "explanation": "The `isset()` function checks if the 'username' cookie is present. If it is, the script prints the username; otherwise, it outputs a message indicating the cookie was not found."
            },
            {
                "title": "Modifying Cookies",
                "content": "Cookies in PHP cannot be directly modified. To update a cookie, you need to overwrite the existing cookie by setting it again with a new value. You can set the same name, path, and expiration time to replace the old cookie.",
                "code": `<?php
                    setcookie("username", "JaneDoe", time() + (86400 * 30), "/");
                    echo "Cookie 'username' has been updated!";
                ?>`,
                "explanation": "In the example above, the 'username' cookie is updated with a new value ('JaneDoe'). If the cookie already exists, it will be overwritten with the new value."
            },
            {
                "title": "Deleting Cookies",
                "content": "To delete a cookie, you must set the cookie with the same name and a past expiration time (typically a timestamp in the past). This tells the browser to remove the cookie from the client's storage.",
                "code": `<?php
                    setcookie("username", "", time() - 3600, "/"); // Set expiration time to one hour ago
                    echo "Cookie 'username' has been deleted!";
                ?>`,
                "explanation": "By setting the expiration time to a past date, the cookie is effectively deleted. The browser will remove the cookie on the next request."
            },
            {
                "title": "Security Considerations",
                "content": "When working with cookies, security should always be a top priority. By default, cookies are not encrypted, which makes them vulnerable to attacks such as man-in-the-middle (MITM) or cookie theft. There are several ways to enhance cookie security in PHP:",
                "subsections": [
                    {
                        "title": "Using Secure and HttpOnly Flags",
                        "content": "The `Secure` flag ensures that cookies are only sent over HTTPS connections, while the `HttpOnly` flag prevents JavaScript from accessing the cookie, which protects against XSS attacks. Always use both flags when dealing with sensitive data, such as user authentication tokens.",
                        "code": `<?php
                            setcookie("session_id", $session_id, time() + (86400 * 30), "/", "", true, true);
                        ?>`,
                        "explanation": "The Secure flag ensures the cookie is only sent over secure HTTPS connections, and the HttpOnly flag restricts the cookie's access to HTTP requests, preventing XSS vulnerabilities."
                    },
                    {
                        "title": "Cookie Encryption",
                        "content": "If your cookies store sensitive information, such as user session IDs or authentication tokens, you should encrypt the cookie's value. This ensures that even if the cookie is intercepted, the data inside remains unreadable.",
                        "code": `<?php
                            $cookie_value = base64_encode(serialize($user_data)); // Encrypting user data
                            setcookie("user_data", $cookie_value, time() + (86400 * 30), "/");
                        ?>`,
                        "explanation": "Here, the user data is serialized and base64 encoded before being stored in a cookie. This adds a layer of protection to sensitive information."
                    },
                    {
                        "title": "Cookie SameSite Attribute",
                        "content": "The `SameSite` attribute helps mitigate cross-site request forgery (CSRF) attacks by restricting how cookies are sent with cross-site requests. The `SameSite` attribute can have values like `Strict`, `Lax`, or `None`. The `Strict` setting ensures that cookies are only sent with same-site requests, while `Lax` allows cookies to be sent with top-level navigations but not with third-party subrequests.",
                        "code": `<?php
                            setcookie("session_id", $session_id, time() + (86400 * 30), "/", "", true, true, "Strict");
                        ?>`,
                        "explanation": "The `SameSite` attribute is set to 'Strict' to prevent the cookie from being sent with cross-site requests, adding an extra layer of protection against CSRF attacks."
                    }
                ]
            }
        ],
        "pitfalls": [
            "Cookies must be set before any output is sent to the browser. Any HTML, whitespace, or error messages before the `setcookie()` function will result in the cookie not being set.",
            "Ensure that cookie values are properly encoded to prevent issues with special characters or malicious code injection.",
            "Cookies are stored in the user's browser and can be easily tampered with. Always sanitize and validate the cookie data on the server side."
        ],
        "summary": "Cookie handling in PHP involves setting, retrieving, modifying, and deleting cookies to store user preferences or session data. Using cookies properly ensures a better user experience and helps maintain state across user sessions. Security considerations, such as using Secure, HttpOnly, SameSite flags, and encryption, are vital to protect sensitive information stored in cookies.",
        "practiceQuestions": [
            {
                "question": "Create a secure cookie that stores a user's language preference and retrieve it on a different page.",
                "hint": "Set the cookie with the Secure and HttpOnly flags to protect the value."
            },
            {
                "question": "Explain how the `SameSite` attribute helps prevent CSRF attacks. What values can it have, and when should each be used?",
                "hint": "Consider the differences between Strict, Lax, and None."
            },
            {
                "question": "How can you securely store and retrieve sensitive information, like authentication tokens, in cookies?",
                "hint": "Think about cookie encryption, Secure and HttpOnly flags, and using base64 encoding."
            },
            {
                "question": "Demonstrate how to delete a cookie when the user logs out. Provide code to both delete the cookie and redirect the user.",
                "hint": "Set the expiration time to a past date and then redirect the user to a logout page."
            },
            {
                "question": "How would you update a user's session cookie after an authentication check? Include updating the cookie value and expiration time.",
                "hint": "You will need to set the same cookie name with a new value and expiration time to update the session."
            }
        ]
    },
     "php_session_handling": {
        "title": "PHP Session Handling",
        "description": "Understand how to manage user sessions in PHP to track user activity across different pages and persist user data during navigation.",
        "sections": [
            {
                "title": "Starting a Session",
                "content": "In PHP, sessions are used to store data across different pages during a user's visit. You start a session using the `session_start()` function. This function must be called at the very beginning of the script, before any output is sent to the browser. Once the session is started, you can store user data using the `$_SESSION` superglobal array. Each session is uniquely identified by a session ID, which is sent as a cookie to the user's browser.",
                "code": `<?php
                    session_start(); // Start the session
                    $_SESSION["username"] = "JohnDoe"; // Store user data
                    echo "Session started and username set!";
                ?>`,
                "explanation": "In this example, the `session_start()` function is called first, followed by setting a session variable `$_SESSION['username']` to 'JohnDoe'. The session data persists as the user navigates through different pages."
            },
            {
                "title": "Accessing Session Variables",
                "content": "Once the session is started, session variables can be accessed through the `$_SESSION` superglobal array. This allows you to retrieve and display user-specific information that was stored earlier. It's important to call `session_start()` on every page that uses session variables to maintain access to session data.",
                "code": `<?php
                    session_start(); // Resume the session
                    if (isset($_SESSION["username"])) {
                        echo "Welcome, " . $_SESSION["username"];
                    } else {
                        echo "No session data found.";
                    }
                ?>`,
                "explanation": "In this example, the script checks if the `username` session variable exists and then displays a welcome message. If the session variable doesn't exist, it outputs a default message."
            },
            {
                "title": "Modifying Session Variables",
                "content": "Session variables are dynamic, meaning you can modify or update their values during the session. Simply assign a new value to the session variable like any other PHP variable. Modifications are immediately reflected across all pages where the session is active.",
                "code": `<?php
                    session_start();
                    $_SESSION["username"] = "JaneDoe"; // Modify session data
                    echo "Username updated to: " . $_SESSION["username"];
                ?>`,
                "explanation": "Here, the session variable `$_SESSION['username']` is updated with a new value. The updated value will be available on all pages where the session is active."
            },
            {
                "title": "Destroying Sessions",
                "content": "You can destroy a session completely using the `session_destroy()` function. However, this does not automatically unset session variables; you need to clear them manually first. This ensures that the session data is fully removed and no longer accessible. Typically, you would destroy a session when a user logs out.",
                "code": `<?php
                    session_start();
                    session_unset(); // Unset all session variables
                    session_destroy(); // Destroy the session
                    echo "Session destroyed and user logged out.";
                ?>`,
                "explanation": "In this example, `session_unset()` removes all session variables, and `session_destroy()` terminates the session. The session data will no longer be accessible after this."
            },
            {
                "title": "Session Security",
                "content": "Session security is crucial to prevent unauthorized access and session hijacking. To enhance session security, consider using the following techniques:",
                "subsections": [
                    {
                        "title": "Regenerating Session ID",
                        "content": "To prevent session fixation attacks, it is important to regenerate the session ID periodically, especially after a user logs in. This ensures that an attacker cannot hijack an existing session by using a fixed session ID.",
                        "code": `<?php
                            session_regenerate_id(true); // Regenerate the session ID
                            $_SESSION["username"] = "JaneDoe";
                        ?>`,
                        "explanation": "The `session_regenerate_id(true)` function creates a new session ID and deletes the old one. This reduces the risk of session hijacking."
                    },
                    {
                        "title": "Using Secure and HttpOnly Flags",
                        "content": "Just like cookies, session IDs can be vulnerable to interception. To mitigate this risk, always use the `Secure` and `HttpOnly` flags when setting the session cookie. The `Secure` flag ensures that the session ID is only sent over secure HTTPS connections, while the `HttpOnly` flag prevents client-side JavaScript from accessing the session ID.",
                        "code": `<?php
                            ini_set('session.cookie_secure', 1); // Secure flag
                            ini_set('session.cookie_httponly', 1); // HttpOnly flag
                        ?>`,
                        "explanation": "By enabling these settings, the session cookie will only be transmitted over HTTPS and cannot be accessed by JavaScript running on the client side, thus increasing security."
                    },
                    {
                        "title": "Setting Session Timeout",
                        "content": "To enhance security, you can set a session timeout to automatically log users out after a period of inactivity. This reduces the risk of session hijacking if the user leaves their device unattended.",
                        "code": `<?php
                            $timeout_duration = 1800; // 30 minutes
                            if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity']) > $timeout_duration) {
                                session_unset();
                                session_destroy();
                                echo "Session timed out.";
                            }
                            $_SESSION['last_activity'] = time(); // Update last activity time
                        ?>`,
                        "explanation": "This script checks if the user has been inactive for more than 30 minutes and, if so, destroys the session. It updates the 'last_activity' timestamp on every page load."
                    }
                ]
            }
        ],
        "pitfalls": [
            "Always call `session_start()` at the beginning of the script before any output is sent to the browser, or it will result in a warning and the session will not be started.",
            "Avoid storing sensitive information, such as passwords, in session variables. Use tokens or other secure methods.",
            "Make sure to properly configure session cookie settings (such as `Secure` and `HttpOnly` flags) to enhance security."
        ],
        "summary": "Session handling in PHP allows for the storage of user data across multiple pages, providing an effective way to manage user state. Proper session security practices, such as regenerating session IDs, using secure cookies, and implementing session timeouts, are crucial to protect session data from unauthorized access and hijacking.",
        "practiceQuestions": [
            {
                "question": "Create a login system that uses sessions to track the user's login status and display a personalized welcome message.",
                "hint": "Use session variables to store user information after login and check the session on each page."
            },
            {
                "question": "What is session fixation, and how can you prevent it in PHP?",
                "hint": "Consider regenerating the session ID after user login and session initialization."
            },
            {
                "question": "How can you implement session timeouts in PHP to automatically log out inactive users?",
                "hint": "Check the last activity time and destroy the session after a certain period of inactivity."
            },
            {
                "question": "Demonstrate how to securely destroy a session and remove all session variables when the user logs out.",
                "hint": "Use `session_unset()` to remove session data and `session_destroy()` to end the session."
            },
            {
                "question": "Explain the difference between `session_start()` and `session_regenerate_id()`, and when each function should be used.",
                "hint": "Consider their roles in starting a session and securing the session ID."
            }
        ]
    },
     "php_login_session": {
        "title": "PHP Login Session",
        "description": "Implement a login system using sessions to maintain user state after authentication, ensuring secure user management across multiple pages.",
        "sections": [
            {
                "title": "Creating a Login Form",
                "content": "The first step in implementing a login system is to create a form where users can input their credentials. The form will use the `POST` method to securely send the username and password to the server. Ensure that the form includes the `action` attribute pointing to the script that will process the login data.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="login.php" method="POST">
                        Username: <input type="text" name="username"><br>
                        Password: <input type="password" name="password"><br>
                        <input type="submit" value="Login">
                    </form>
                </body>
                </html>`,
                "explanation": "This form asks the user for their username and password. When the user submits the form, the data will be sent to `login.php` via POST for processing. It's essential to keep the form simple, but it can be extended with features like 'Remember Me' for persistent login."
            },
            {
                "title": "Processing Login Credentials",
                "content": "On the server-side, validate the user's credentials. After validating, store the necessary information in the session and create a session variable to maintain the user's login state. Always use prepared statements or functions to securely validate credentials and prevent SQL injection.",
                "code": `<?php
                    session_start();
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $username = $_POST["username"];
                        $password = $_POST["password"];
                        
                        // Assume a function check_credentials() exists that safely validates the user data
                        if (check_credentials($username, $password)) {
                            $_SESSION["username"] = $username; // Set session variable
                            echo "Login successful!";
                            // Redirect to a logged-in page
                            header("Location: dashboard.php");
                            exit;
                        } else {
                            echo "Invalid username or password.";
                        }
                    }
                ?>`,
                "explanation": "Here, the `check_credentials()` function is a placeholder for the logic used to validate the user's input (e.g., querying the database and verifying the password). After successful login, the user's name is stored in the session, and they are redirected to the `dashboard.php` page. If the credentials are invalid, an error message is shown."
            },
            {
                "title": "Securing Passwords",
                "content": "Never store user passwords in plain text. Always hash passwords using a strong hashing algorithm like `password_hash()`. PHP's `password_verify()` function should be used to verify hashed passwords during login.",
                "code": `<?php
                    // Hash a password when saving it
                    $hashed_password = password_hash("userPassword", PASSWORD_DEFAULT);

                    // Verify the password during login
                    if (password_verify($input_password, $hashed_password)) {
                        echo "Password is correct!";
                    } else {
                        echo "Invalid password!";
                    }
                ?>`,
                "explanation": "In this example, the `password_hash()` function creates a hashed password to be stored securely in the database. During login, `password_verify()` compares the hashed password with the user's input to confirm its validity. This ensures that sensitive password data is never stored or transmitted in plain text."
            },
            {
                "title": "Logging Out and Destroying Sessions",
                "content": "To log the user out, destroy the session by using `session_destroy()`. Make sure to unset the session variables using `session_unset()` to remove all session data, and then redirect the user to a login page or the homepage.",
                "code": `<?php
                    session_start();
                    session_unset(); // Remove all session variables
                    session_destroy(); // Destroy the session
                    echo "You have logged out successfully!";
                    header("Location: login.php"); // Redirect to login page
                    exit;
                ?>`,
                "explanation": "This script first unsets all session variables with `session_unset()` and then destroys the session with `session_destroy()`. After logging out, the user is redirected to the login page."
            },
            {
                "title": "User Role Management",
                "content": "In many systems, different users have different roles (e.g., Admin, User). You can implement user roles in session management by storing the user's role as a session variable. This allows you to control access to specific pages based on the user's role.",
                "code": `<?php
                    session_start();
                    if ($_SESSION["role"] == "admin") {
                        echo "Welcome, Admin!";
                        // Show admin dashboard
                    } elseif ($_SESSION["role"] == "user") {
                        echo "Welcome, User!";
                        // Show user dashboard
                    } else {
                        echo "Access denied.";
                    }
                ?>`,
                "explanation": "By storing the user's role in the session (e.g., `$_SESSION['role']`), you can conditionally display different content or pages based on the user's privileges. This ensures proper access control in your application."
            }
        ],
        "pitfalls": [
            "Never store sensitive data (e.g., passwords, credit card numbers) directly in session variables. Always store only the necessary identifiers and retrieve the data from the database when needed.",
            "Ensure that session cookies are set securely using the `Secure` and `HttpOnly` flags to protect session data from interception and manipulation.",
            "Remember to always use HTTPS to prevent session hijacking and man-in-the-middle attacks, especially when dealing with login systems."
        ],
        "summary": "PHP Login Sessions help manage user authentication and maintain state across various pages. A robust login system involves validating credentials, securely handling passwords, and managing sessions effectively to track user login state. Implementing role-based access control ensures that different users have access to different parts of the system based on their privileges.",
        "practiceQuestions": [
            {
                "question": "Modify the login system to include a 'Remember Me' feature, storing a persistent cookie to keep the user logged in even after the session expires.",
                "hint": "Use cookies to store a secure token that authenticates the user on each page load."
            },
            {
                "question": "Enhance the logout system to prevent access to protected pages after logout by redirecting users to the login page.",
                "hint": "Use `session_unset()` and `session_destroy()` in conjunction with a redirect to enforce logout."
            },
            {
                "question": "Explain how you would implement password recovery functionality in a PHP login system.",
                "hint": "Consider sending a password reset link to the user's email with a secure token for resetting the password."
            },
            {
                "question": "How can you improve security by adding multi-factor authentication (MFA) in your login system?",
                "hint": "Look into integrating an additional verification method, such as SMS or email-based OTPs, alongside the regular login process."
            },
            {
                "question": "How would you implement session timeouts for automatic logout in a PHP application?",
                "hint": "Use a timestamp to track user activity and destroy the session after a period of inactivity."
            }
        ]
    },
    "php_string_patterns": {
        "title": "String Patterns and Matching",
        "description": "Learn how to use string patterns and regular expressions to validate and manipulate strings in PHP. Regular expressions (regex) allow you to perform complex string matching and transformation.",
        "sections": [
            {
                "title": "Using Regular Expressions",
                "content": "Regular expressions are a powerful tool for performing pattern matching on strings. PHP provides the `preg_match()` function to check if a string matches a given pattern. You can create patterns that match specific types of strings, like email addresses or phone numbers, or check for specific characters.",
                "code": `<?php
                    $pattern = "/^[a-zA-Z]+$/"; // Pattern to match only letters (both uppercase and lowercase)
                    if (preg_match($pattern, "Hello")) {
                        echo "String matches the pattern.";
                    } else {
                        echo "String does not match.";
                    }
                ?>`,
                "explanation": "In this example, the regular expression `/^[a-zA-Z]+$/` matches a string that contains only alphabetic characters (both lowercase and uppercase). The `preg_match()` function returns `true` if the pattern matches the string and `false` otherwise."
            },
            {
                "title": "Replacing Strings with preg_replace()",
                "content": "PHP's `preg_replace()` function allows you to replace parts of a string that match a specific pattern. It's useful for tasks like text transformations, substitutions, or even sanitizing user input.",
                "code": `<?php
                    $string = "Hello World!";
                    $newString = preg_replace("/World/", "PHP", $string);
                    echo $newString; // Outputs: Hello PHP!
                ?>`,
                "explanation": "In this example, the `preg_replace()` function searches for the word 'World' in the string 'Hello World!' and replaces it with 'PHP'. This allows for powerful string manipulations based on patterns."
            },
            {
                "title": "Matching Multiple Patterns",
                "content": "You can match multiple patterns in a string using the `preg_match_all()` function. This can be useful when you want to find all occurrences of a pattern in a string, such as finding all email addresses in a text.",
                "code": `<?php
                    $text = "Contact us at support@example.com or admin@website.org";
                    $pattern = "/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/"; // Simple email regex
                    preg_match_all($pattern, $text, $matches);
                    print_r($matches); // Outputs: Array ( [0] => Array ( [0] => support@example.com [1] => admin@website.org ) )
                ?>`,
                "explanation": "Here, the `preg_match_all()` function finds all email addresses in the provided text. The pattern used is a simple email regex that matches most common email formats."
            }
        ],
        "pitfalls": [
            "Regular expressions can be complex, so always test your patterns using an online regex tester before applying them in your code.",
            "Be mindful of the performance implications of using regular expressions, especially with large data sets. Complex patterns can be slow to process."
        ],
        "summary": "String patterns and matching in PHP are handled using regular expressions. These powerful tools help validate, search, and replace string data efficiently. Whether you're validating input or transforming text, regex gives you the flexibility to work with strings at a more advanced level.",
        "practiceQuestions": [
            {
                "question": "Write a regular expression to validate an email address format.",
                "hint": "Consider various components of an email address: username, domain, and extension. Ensure you handle common characters like periods and hyphens."
            },
            {
                "question": "Demonstrate how to use `preg_split()` to split a string by a specific delimiter.",
                "hint": "Think about using common delimiters like commas, semicolons, or spaces. `preg_split()` allows you to split strings based on regex patterns."
            },
            {
                "question": "How can you use regular expressions to check if a string contains only digits?",
                "hint": "Use the `\d` pattern, which matches any digit, and ensure the entire string consists of digits by anchoring the pattern with `^` and `$`."
            },
            {
                "question": "How can you match a URL pattern using regular expressions in PHP?",
                "hint": "Consider matching the protocol (`http`, `https`), domain, and optional path or query strings."
            }
        ]
    },
"php_sending_emails": {
        "title": "PHP Sending Emails",
        "description": "Understand how to send emails using PHP's `mail()` function and external libraries like PHPMailer. Learn the basics as well as advanced techniques for email handling in PHP.",
        "sections": [
            {
                "title": "Using the mail() Function",
                "content": "The `mail()` function is a built-in PHP function used to send simple emails. It is easy to use but offers limited functionality. You'll specify the recipient's email address, subject, and the message content, and the email will be sent via the server's default mail system.",
                "code": `<?php
                    $to = "recipient@example.com";
                    $subject = "Test Email";
                    $message = "This is a test email.";
                    $headers = "From: sender@example.com";
                    if(mail($to, $subject, $message, $headers)) {
                        echo "Email sent!";
                    } else {
                        echo "Failed to send email.";
                    }
                ?>`,
                "explanation": "In this example, the `mail()` function is used to send a simple email. The `headers` parameter is included to specify the 'From' address. The function returns `true` if the email is successfully sent, and `false` otherwise."
            },
            {
                "title": "Using PHPMailer for Enhanced Functionality",
                "content": "PHPMailer is an external library that offers enhanced email functionality, including SMTP support, HTML email sending, file attachments, and better error handling. It is more reliable and secure than the `mail()` function.",
                "code": `<?php
                    use PHPMailer\PHPMailer\PHPMailer;
                    require 'vendor/autoload.php';

                    $mail = new PHPMailer();
                    $mail->isSMTP();  // Use SMTP for sending
                    $mail->Host = 'smtp.example.com';  // SMTP server address
                    $mail->Username = 'username@example.com';  // SMTP username
                    $mail->Password = 'yourpassword';  // SMTP password
                    $mail->setFrom('from@example.com', 'Mailer');
                    $mail->addAddress('recipient@example.com');  // Add recipient
                    $mail->Subject = 'Test Email';
                    $mail->Body = 'This is a test email using PHPMailer.';
                    // Send email
                    if($mail->send()) {
                        echo "Email sent successfully!";
                    } else {
                        echo "Mailer Error: " . $mail->ErrorInfo;
                    }
                ?>`,
                "explanation": "PHPMailer is a versatile email-sending library that supports advanced features such as sending via SMTP servers, adding attachments, setting HTML bodies, and more. In this example, we configure PHPMailer to send an email through an SMTP server, which is a more secure and reliable method than using PHP's `mail()` function."
            },
            {
                "title": "Sending HTML Emails",
                "content": "PHPMailer supports sending HTML emails, allowing you to format the message content using HTML tags. This is useful for sending rich-content emails such as newsletters, marketing campaigns, or account verification emails.",
                "code": `<?php
                    $mail->isHTML(true);  // Enable HTML content
                    $mail->Subject = 'HTML Email Example';
                    $mail->Body = '<h1>Hello</h1><p>This is an <b>HTML</b> email!</p>';
                    if($mail->send()) {
                        echo "HTML email sent successfully!";
                    } else {
                        echo "Error: " . $mail->ErrorInfo;
                    }
                ?>`,
                "explanation": "By setting the `isHTML(true)` flag, we tell PHPMailer that the email body is HTML. This allows for rich formatting, such as bold text, headings, and links."
            },
            {
                "title": "Attaching Files to Emails",
                "content": "PHPMailer also supports file attachments. This feature is useful when sending documents, images, or other files as part of your email. You can attach files with the `addAttachment()` method.",
                "code": `<?php
                    $mail->addAttachment('/path/to/file.jpg');  // Add an attachment
                    $mail->Subject = 'Email with Attachment';
                    $mail->Body    = 'Please find the attached file.';
                    if($mail->send()) {
                        echo "Email with attachment sent successfully!";
                    } else {
                        echo "Mailer Error: " . $mail->ErrorInfo;
                    }
                ?>`,
                "explanation": "The `addAttachment()` method adds a file to the email. You can specify the path of the file you want to attach. PHPMailer supports both inline and regular attachments."
            }
        ],
        "pitfalls": [
            "Ensure that your server is properly configured to send emails. Many local or shared hosting servers might not have a functional mail server.",
            "Using `mail()` function is not reliable for large-scale applications. SMTP servers should be used for better reliability and security.",
            "For SMTP, ensure that your credentials (username, password) and SMTP server configurations are correct, or emails may fail to send.",
            "Always validate and sanitize email inputs to prevent header injection attacks."
        ],
        "summary": "Sending emails in PHP can be achieved using the built-in `mail()` function for simple needs, or with libraries like PHPMailer for advanced features like SMTP support, HTML email, and file attachments. PHPMailer provides more flexibility, security, and reliability, making it the preferred method for production environments.",
        "practiceQuestions": [
            {
                "question": "Write a script to send a confirmation email after user registration, including a unique activation link.",
                "hint": "You can use PHPMailer to include an activation link that sends the user to a page to confirm their email."
            },
            {
                "question": "What are the advantages of using PHPMailer over the `mail()` function for sending emails?",
                "hint": "Think about security (SMTP), error handling, and sending HTML content or attachments."
            },
            {
                "question": "How can you handle email delivery failures in your application using PHPMailer?",
                "hint": "PHPMailer provides an `ErrorInfo` property to get detailed error messages. Log or notify the user accordingly."
            },
            {
                "question": "How would you send an email with multiple attachments using PHPMailer?",
                "hint": "You can call `addAttachment()` multiple times to attach multiple files."
            }
        ]
    },
  "php_file_uploading": {
        "title": "PHP File Uploading",
        "description": "Learn how to handle file uploads securely in PHP, including validation, storage, and image processing.",
        "sections": [
            {
                "title": "Creating a File Upload Form",
                "content": "To upload files in PHP, you need to create an HTML form that allows users to choose files for upload. The form must include `enctype='multipart/form-data'` to handle file data. This ensures the file content is properly sent to the server.",
                "code": `<!DOCTYPE html>
                <html>
                <body>
                    <form action="upload.php" method="POST" enctype="multipart/form-data">
                        Select file: <input type="file" name="fileToUpload"><br>
                        <input type="submit" value="Upload">
                    </form>
                </body>
                </html>`,
                "explanation": "In the form above, the file input allows users to select a file for upload. The form is set to `multipart/form-data`, which is required for handling file uploads."
            },
            {
                "title": "Handling File Uploads",
                "content": "After the form is submitted, the uploaded file can be accessed through the `$_FILES` superglobal. This contains details about the file, such as the name, type, size, and temporary storage location. The file can then be moved to a permanent directory on the server.",
                "code": `<?php
                    $target_dir = "uploads/";
                    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                        echo "File uploaded successfully.";
                    } else {
                        echo "Error uploading file.";
                    }
                ?>`,
               
            },
            {
                "title": "Validating File Uploads",
                "content": "To ensure the security of file uploads, it’s essential to validate the file’s type and size. You should only allow specific file types (like images or documents) and set limits on the file size to prevent malicious uploads.",
                "code": `<?php
                    $target_dir = "uploads/";
                    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
                    $max_file_size = 500000; // 500 KB

                    // Check file size
                    if ($_FILES["fileToUpload"]["size"] > $max_file_size) {
                        echo "Sorry, your file is too large.";
                        exit;
                    }

                    // Allow only certain file formats
                    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
                        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                        exit;
                    }

                    // Check if file is a real image
                    if (!getimagesize($_FILES["fileToUpload"]["tmp_name"])) {
                        echo "Sorry, your file is not an image.";
                        exit;
                    }

                    // Move file if everything is okay
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                        echo "File uploaded successfully.";
                    } else {
                        echo "Error uploading file.";
                    }
                ?>`,
                "explanation": "In this example, the file is validated to ensure it is not too large (under 500 KB), and that it is an image (JPG, PNG, JPEG, or GIF). The `getimagesize()` function is used to verify that the uploaded file is an actual image."
            },
            {
                "title": "Creating a Thumbnail for Uploaded Images",
                "content": "You can create a thumbnail of the uploaded image using the GD library, which is included in PHP. This is especially useful for displaying image previews.",
                "code": `<?php
                    // Set the path for the uploaded file and the thumbnail
                    $target_file = "uploads/" . basename($_FILES["fileToUpload"]["name"]);
                    $thumbnail_path = "uploads/thumbnails/" . basename($_FILES["fileToUpload"]["name"]);

                    // Check if image is uploaded successfully
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                        echo "File uploaded successfully.";

                        // Create a thumbnail using GD library
                        list($width, $height) = getimagesize($target_file);
                        $new_width = 150;
                        $new_height = ($height / $width) * $new_width;

                        $thumbnail = imagecreatetruecolor($new_width, $new_height);

                        $source = imagecreatefromjpeg($target_file);
                        imagecopyresampled($thumbnail, $source, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

                        imagejpeg($thumbnail, $thumbnail_path);
                        echo "Thumbnail created successfully!";
                    } else {
                        echo "Error uploading file.";
                    }
                ?>`,
                "explanation": "This code creates a thumbnail for the uploaded image using the GD library. The `getimagesize()` function is used to determine the original image's dimensions, and `imagecopyresampled()` resizes it. The thumbnail is saved in the `thumbnails/` directory."
            }
        ],
        "pitfalls": [
            "Always validate file types and sizes to prevent malicious uploads. Consider using `mime_content_type()` to ensure the file type matches the expected format.",
            "Ensure that the file upload directory has appropriate permissions to prevent unauthorized access.",
            "Avoid overwriting existing files by checking the file’s name or generating a unique name before saving.",
            "Consider limiting the file upload size to prevent large files from consuming server resources."
        ],
        "summary": "File uploading in PHP is a powerful feature, but it must be handled securely. You need to validate the file's size and type, and ensure proper directory permissions. Using libraries like GD for image resizing and creating thumbnails is a great way to enhance the functionality of your upload system.",
        "practiceQuestions": [
            {
                "question": "Enhance the file upload process to validate the file type and size.",
                "hint": "Consider using `mime_content_type()` for type checking, and set a maximum size for uploads."
            },
            {
                "question": "Explain how to create a thumbnail for uploaded images using PHP.",
                "hint": "Think about using GD library functions like `imagecreatefromjpeg()` and `imagecopyresampled()`."
            },
            {
                "question": "What steps would you take to secure your file upload system?",
                "hint": "Consider validating file types, limiting file sizes, using unique names for uploads, and setting proper directory permissions."
            }
        ]
    },
   "php_filters_error_handling": {
        "title": "PHP Filters and Error Handling",
        "description": "Explore how to use filters for data validation and implement error handling in PHP applications.",
        "sections": [
            {
                "title": "Using PHP Filters",
                "content": "PHP provides built-in filters that help in data validation and sanitization. These filters can be applied to different types of data, such as email addresses, URLs, integers, and more. The `filter_var()` function is used to validate or sanitize data. Here’s how to validate an email address.",
                "code": `<?php
                    $email = "test@example.com";
                    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        echo "Valid email.";
                    } else {
                        echo "Invalid email.";
                    }
                ?>`,
                "explanation": "In the example above, `filter_var()` is used to validate if the `$email` variable contains a valid email address. If the email is valid, it prints 'Valid email', otherwise, it prints 'Invalid email'. The `FILTER_VALIDATE_EMAIL` filter checks if the format of the email address is correct."
            },
            {
                "title": "Implementing Error Handling",
                "content": "Error handling in PHP is crucial for handling runtime errors and exceptions gracefully. Use `try-catch` blocks to handle exceptions, and use `set_error_handler()` to set a custom error handler for non-exception errors.",
                "code": `<?php
                    set_error_handler("customError");
                    function customError($errno, $errstr) {
                        echo "Error: [$errno] $errstr";
                    }

                    // Trigger error (undefined variable)
                    echo($test);
                ?>`,
                "explanation": "In the code above, `set_error_handler()` sets a custom error handler function called `customError()`. The custom handler outputs the error number (`$errno`) and the error message (`$errstr`). We then intentionally trigger an error by trying to echo an undefined variable `$test`. This triggers the error handler."
            }
        ],
        "pitfalls": [
            "Always validate and sanitize user input to avoid security risks, such as XSS or SQL injection.",
            "Handle exceptions properly to ensure that your application can gracefully recover from unexpected errors. Display user-friendly error messages or log errors for troubleshooting purposes."
        ],
        "summary": "PHP filters are powerful tools for validating and sanitizing user input, ensuring data integrity and security. Error handling mechanisms such as custom error handlers and exceptions allow you to handle and manage runtime errors effectively, improving the robustness of your PHP applications.",
        "practiceQuestions": [
            {
                "question": "Create a filter for validating URLs and test various inputs.",
                "hint": "Use `FILTER_VALIDATE_URL` to validate URLs. Test both valid and invalid URLs to see how the filter responds."
            },
            {
                "question": "How can you log errors to a file instead of displaying them?",
                "hint": "Consider using the `error_log()` function, which logs errors to a file or a logging system."
            },
            {
                "question": "What is the difference between warnings and exceptions in PHP?",
                "hint": "Consider how PHP handles warnings (runtime issues) vs exceptions (explicitly thrown errors that can be caught and handled)."
            }
        ]
    },
   "php_classes": {
        "title": "Defining PHP Classes",
        "description": "Learn how to define classes in PHP, encapsulating properties and methods, and diving deeper into object-oriented programming concepts like constructors, destructors, and access control.",
        "sections": [
            {
                "title": "Basic Class Definition",
                "content": "In PHP, a class is a blueprint for creating objects (instances). A class can contain properties (variables) and methods (functions) that define the behavior and characteristics of the object. Classes in PHP are defined using the `class` keyword, followed by the class name and a set of curly braces `{}` that enclose its properties and methods.",
                "code": `<?php
                    // Defining a simple class 'Car' with properties and a constructor
                    class Car {
                        public $color;
                        public $model;

                        // Constructor function to initialize the class with values
                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }

                        // Method to display car details
                        public function displayCarDetails() {
                            echo "Car Model: " . $this->model . "<br>";
                            echo "Car Color: " . $this->color . "<br>";
                        }
                    }

                    // Creating an object (instance) of the Car class
                    $myCar = new Car("Red", "Tesla Model 3");
                    $myCar->displayCarDetails();
                ?>`,
                "explanation": "In the above example, the `Car` class is defined with two properties: `$color` and `$model`. These properties are initialized through the constructor method, which gets called automatically when a new object is created. We also have a method `displayCarDetails()` that outputs the car's model and color. The `new` keyword is used to create an instance of the `Car` class, and the properties and methods are accessed using the object `$myCar`."
            },
            {
                "title": "Access Modifiers",
                "content": "PHP supports three access modifiers to control the visibility of class properties and methods: `public`, `private`, and `protected`. These access modifiers help to encapsulate and protect data by restricting direct access from outside the class, promoting data integrity and abstraction.",
                "code": `<?php
                    class Car {
                        // Private property
                        private $engine;

                        // Public method to set the engine type
                        public function setEngine($engine) {
                            $this->engine = $engine;
                        }

                        // Public method to get the engine type
                        public function getEngine() {
                            return $this->engine;
                        }
                    }

                    // Creating an object of the Car class
                    $myCar = new Car();
                    // Setting engine type using the public method
                    $myCar->setEngine("V8");
                    // Accessing engine type using the public method
                    echo "Car Engine: " . $myCar->getEngine();
                ?>`,
                "explanation": "In this example, the `engine` property is marked as `private`, meaning it cannot be accessed directly from outside the class. Instead, public methods `setEngine()` and `getEngine()` are provided to safely set and retrieve the engine type. This approach follows the principle of encapsulation, where sensitive data is hidden from outside access and manipulated only through methods. The three access modifiers work as follows:\n\n- **Public**: Properties and methods are accessible from anywhere.\n- **Private**: Properties and methods are only accessible within the class.\n- **Protected**: Properties and methods are accessible within the class and its subclasses."
            },
            {
                "title": "Constructors and Destructors",
                "content": "A constructor is a special method that gets called automatically when an object is created. It is used to initialize the object’s properties. A destructor, on the other hand, is called when an object is destroyed, typically used for cleanup tasks. Both constructors and destructors are defined using the `__construct()` and `__destruct()` keywords, respectively.",
                "code": `<?php
                    class Car {
                        public $color;
                        public $model;

                        // Constructor to initialize properties
                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                            echo "A new car is created with model: " . $this->model . "<br>";
                        }

                        // Destructor to perform cleanup
                        function __destruct() {
                            echo "The car " . $this->model . " is destroyed.<br>";
                        }

                        public function displayCarDetails() {
                            echo "Car Model: " . $this->model . "<br>";
                            echo "Car Color: " . $this->color . "<br>";
                        }
                    }

                    // Creating and destroying the object
                    $myCar = new Car("Blue", "BMW X5");
                    $myCar->displayCarDetails();
                    unset($myCar); // Destructor is called here
                ?>`,
                "explanation": "The constructor `__construct()` is used to initialize the object when it is created, while the destructor `__destruct()` is called when the object is destroyed (for example, when it is unset or goes out of scope). In the above example, the message 'A new car is created' is displayed when the object is created, and 'The car is destroyed' is shown when the object is unset. The destructor is helpful for tasks like closing database connections or releasing resources."
            }
        ],
        "pitfalls": [
            "Avoid using global variables inside classes to maintain encapsulation. Global variables can lead to unexpected behavior and make your code harder to maintain.",
            "Be careful with access modifiers. For example, don't use `public` unnecessarily as it exposes internal class functionality. Restrict access to sensitive data by using `private` or `protected` where possible.",
            "Always validate data before assigning it to class properties, especially in public setters, to avoid data corruption or unwanted side effects.",
            "When creating classes that manage resources (like files or database connections), always ensure proper cleanup (e.g., closing connections) to prevent memory leaks or file locks."
        ],
        "summary": "Defining classes in PHP allows for the creation of reusable and maintainable code. It is a fundamental concept of object-oriented programming (OOP) that promotes modular design and separation of concerns. Key features include defining properties, using constructors and destructors, and managing access to class data with modifiers. Understanding access control and good encapsulation practices ensures that your classes remain secure, efficient, and easy to maintain.",
        "practiceQuestions": [
            {
                "question": "Define a class called `Book` with properties for title, author, and publisher. Add methods to set and get these properties.",
                "hint": "Include methods `setTitle()`, `setAuthor()`, and `setPublisher()` for setting the values, and `getTitle()`, `getAuthor()`, and `getPublisher()` for retrieving them."
            },
            {
                "question": "Explain the difference between public, private, and protected properties in a class. Provide examples where each would be appropriate.",
                "hint": "Consider using public for properties that should be accessible anywhere, private for internal data, and protected for data that should be accessible by subclasses."
            },
            {
                "question": "Create a class `User` with a private property for email and a method to return the email. Demonstrate the encapsulation principle.",
                "hint": "The email property should not be accessible directly from outside. Use a public method like `getEmail()` to retrieve it."
            },
            {
                "question": "Explain the purpose and use of constructors and destructors in PHP. Provide an example where both are used in a class.",
                "hint": "Constructors are used for initialization tasks, while destructors are used for cleanup tasks (like closing connections)."
            },
            {
                "question": "Create a class `Product` with a private property for the price and methods for applying a discount and retrieving the price.",
                "hint": "Include a method `applyDiscount($percentage)` to modify the price, and ensure the price is not directly accessible from outside the class."
            }
        ]
    },
    "php_objects": {
        "title": "Creating and Using Objects",
        "description": "Discover how to create instances of classes, interact with object properties, and invoke methods in your PHP applications, enabling structured and reusable code.",
        "sections": [
            {
                "title": "Instantiating Objects",
                "content": "In PHP, objects are instances of classes. To instantiate an object, you use the `new` keyword followed by the class name. When creating an object, you can pass parameters to the constructor method (if defined) to initialize the object’s properties. Objects are created in memory and can be used to access properties and methods defined in their respective classes.",
                "code": `<?php
                    // Define the 'Car' class with a constructor that accepts parameters
                    class Car {
                        public $color;
                        public $model;

                        // Constructor to initialize the object
                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }
                    }

                    // Instantiating an object of the 'Car' class
                    $myCar = new Car("red", "Toyota");
                    
                    // Accessing properties of the object
                    echo $myCar->color;  // Outputs: red
                    echo $myCar->model;  // Outputs: Toyota
                ?>`,
                "explanation": "The example shows how to create an object `$myCar` from the `Car` class. The `new Car(\"red\", \"Toyota\")` line instantiates the object and initializes the `$color` and `$model` properties using the constructor. The object’s properties are accessed using the arrow operator (`->`)."
            },
            {
                "title": "Using Object Methods",
                "content": "Once an object is instantiated, you can call its methods using the arrow operator (`->`). Methods define the actions that can be performed on an object. In the example below, we define a method called `start()` inside the `Car` class that returns a message indicating that the car has started.",
                "code": `<?php
                    // Define the 'Car' class with a method to start the car
                    class Car {
                        public function start() {
                            return "Car started";
                        }
                    }

                    // Creating an object of the 'Car' class
                    $myCar = new Car();
                    
                    // Calling the 'start' method on the object
                    echo $myCar->start();  // Outputs: Car started
                ?>`,
                "explanation": "In this example, the `start()` method is defined inside the `Car` class. When we create the object `$myCar` and call the `start()` method using `$myCar->start()`, it outputs 'Car started'. This illustrates how methods can be invoked on objects to perform specific actions or return data."
            },
            {
                "title": "Object Properties vs Methods",
                "content": "Object properties store data associated with the object, while methods define the behavior or actions that can be performed. Properties are accessed directly, while methods are called with parentheses. Understanding the distinction between these two allows for better structuring of your code. Properties store the state, while methods define the operations on that state.",
                "code": `<?php
                    class Car {
                        public $color;
                        public $model;

                        // Constructor to initialize properties
                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }

                        // Method to display car details
                        public function displayDetails() {
                            echo "Car Model: " . $this->model . "<br>";
                            echo "Car Color: " . $this->color . "<br>";
                        }
                    }

                    // Instantiate object
                    $myCar = new Car("blue", "Honda Civic");

                    // Access property directly
                    echo $myCar->color;  // Outputs: blue

                    // Call method
                    $myCar->displayDetails();  // Outputs: Car Model: Honda Civic, Car Color: blue
                ?>`,
                "explanation": "Here, the `Car` class has both properties and methods. The `color` property is accessed directly, while the `displayDetails()` method is called to display both the model and the color. This demonstrates how properties hold data and methods manipulate or output that data."
            }
        ],
        "pitfalls": [
            "Ensure you are instantiating the correct class to avoid errors. For instance, trying to instantiate a non-existing class or incorrect class names will result in errors.",
            "Be cautious about accessing properties or methods of objects before they are properly initialized. An uninitialized property may lead to warnings or undefined behavior.",
            "Always check the scope of properties and methods when designing your classes. Using public properties too often can expose unnecessary internal details, potentially violating encapsulation principles.",
            "Attempting to access a private or protected property directly from outside the class will result in a fatal error. Always use appropriate getters and setters if you need controlled access."
        ],
        "summary": "Creating and using objects in PHP is essential to building organized and reusable code. Objects are instances of classes that encapsulate both data (properties) and behavior (methods). The arrow operator (`->`) is used to interact with these objects by accessing their properties and invoking methods. By structuring your code with objects, you follow object-oriented programming principles that enhance maintainability and scalability.",
        "practiceQuestions": [
            {
                "question": "Create an object from the `Car` class and call a method to display its color. Make sure to use the constructor to set the color.",
                "hint": "Use a constructor method to initialize the object's properties, then access those properties via the object."
            },
            {
                "question": "What happens if you try to access a private property from outside the class? How can you fix this?",
                "hint": "Consider using getter and setter methods to access private or protected properties."
            },
            {
                "question": "Demonstrate how to create multiple objects from the same class with different properties, such as different car models.",
                "hint": "Instantiate the class multiple times, passing different values to the constructor for each instance."
            },
            {
                "question": "Explain the difference between calling an object method and accessing an object property.",
                "hint": "Methods are called with parentheses, whereas properties are accessed directly via the object."
            },
            {
                "question": "Create a class `Employee` with properties for name and salary. Write methods to set and get these properties, then instantiate multiple `Employee` objects.",
                "hint": "Use setter and getter methods to set and get the values for name and salary, and instantiate multiple employee objects with different values."
            }
        ]
    },
    "php_member_functions": {
        "title": "Calling Member Functions",
        "description": "Learn how to define and call member functions in PHP classes. This allows objects to perform actions, making your PHP code more dynamic and reusable.",
        "sections": [
            {
                "title": "Defining Member Functions",
                "content": "Member functions are functions defined inside a class that define the behavior or actions an object can perform. These functions can be called on instances of the class. To define a member function, simply declare a function inside the class using the `public`, `protected`, or `private` access modifiers depending on the desired visibility.",
                "code": `<?php
                    class Car {
                        public function drive() {
                            return "Driving the car!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(); // Outputs: Driving the car!
                ?>`,
                "explanation": "In this example, the `Car` class has a `drive()` method that can be called on an object of type `Car`. The method returns a simple string. The object `$myCar` is instantiated from the `Car` class, and the method `drive()` is called using `$myCar->drive()`, producing the output 'Driving the car!'."
            },
            {
                "title": "Function Parameters",
                "content": "Member functions can accept parameters to perform operations based on dynamic input. This allows member functions to operate on values provided at runtime. Parameters are declared inside the parentheses following the function name and can be used within the function body.",
                "code": `<?php
                    class Car {
                        public function drive($speed) {
                            return "Driving at $speed km/h.";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(100); // Outputs: Driving at 100 km/h.
                ?>`,
                "explanation": "Here, the `drive()` function takes a parameter `$speed`, which allows you to specify the speed at which the car is driving. When calling the function on the `$myCar` object, we pass the speed `100`, which is then used in the function's return statement."
            },
            {
                "title": "Returning Values from Member Functions",
                "content": "Member functions can return values. These values can be used in expressions or assigned to variables. You can return anything from simple strings to complex objects or arrays, depending on the function's purpose.",
                "code": `<?php
                    class Car {
                        public function fuelEfficiency($distance, $fuel) {
                            if ($fuel == 0) return "Fuel cannot be zero!";
                            return $distance / $fuel;
                        }
                    }

                    $myCar = new Car();
                    $efficiency = $myCar->fuelEfficiency(500, 25); // Outputs: 20
                    echo "Fuel Efficiency: " . $efficiency . " km/l.";
                ?>`,
                "explanation": "In this example, the `fuelEfficiency()` method calculates the car's fuel efficiency by dividing the distance traveled by the amount of fuel used. The result is returned and stored in the `$efficiency` variable, which is then echoed out. This demonstrates how member functions can return useful data for further use."
            },
            {
                "title": "Using Default Parameters in Member Functions",
                "content": "You can define default values for function parameters. If a parameter is not provided when calling the function, the default value is used. This is useful for optional parameters.",
                "code": `<?php
                    class Car {
                        public function drive($speed = 60) {
                            return "Driving at $speed km/h.";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(); // Outputs: Driving at 60 km/h.
                    echo $myCar->drive(100); // Outputs: Driving at 100 km/h.
                ?>`,
                "explanation": "Here, the `drive()` method has a default parameter value of `60` for `$speed`. If no argument is passed when calling the method, the default value of `60` is used. If an argument is passed, it overrides the default value."
            }
        ],
        "pitfalls": [
            "Ensure you are calling the correct method on the right object, as calling methods on incorrect objects can result in errors.",
            "Be cautious with parameters; always validate them if necessary to avoid unexpected behavior.",
            "Remember to handle any return values from methods appropriately. If a function returns `null`, check for that scenario before using the result.",
            "Avoid overloading methods with too many parameters; it can lead to complex code that is difficult to maintain."
        ],
        "summary": "Calling member functions in PHP allows you to define and execute the behavior of objects, enhancing code reusability and organization. By using function parameters, returning values, and setting default parameter values, you can make your functions more flexible and dynamic.",
        "practiceQuestions": [
            {
                "question": "Create a member function in the `Car` class that calculates fuel efficiency based on distance and fuel used.",
                "hint": "Use parameters to pass distance and fuel, and return the calculated efficiency."
            },
            {
                "question": "Explain how you would use default parameter values in a member function.",
                "hint": "Consider the use of optional parameters when defining functions."
            },
            {
                "question": "Demonstrate method overloading in PHP.",
                "hint": "Think about how to handle different parameter types or method names to achieve similar results."
            },
            {
                "question": "How would you handle a situation where a member function could return either a string or an array?",
                "hint": "Consider using a return type that can handle multiple data types or check the type of the return value before using it."
            }
        ]
    },
    "php_constructor_functions": {
        "title": "Constructor Functions",
        "description": "Understand the role of constructor functions in initializing object properties. Constructors are special functions that allow you to set up an object's initial state when it is created.",
        "sections": [
            {
                "title": "Creating a Constructor",
                "content": "A constructor is a special method in PHP that is automatically called when an object is instantiated. It’s typically used to initialize object properties and prepare the object for use. The constructor method is named `__construct` and can accept parameters to assign values to object properties.",
                "code": `
<?php
    // Define the Car class
    class Car {
        // Declare properties for color and model
        public $color;
        public $model;

        // The constructor is called when the object is instantiated
        // It takes two arguments: color and model
        function __construct($color, $model) {
            $this->color = $color; // Set the color of the car
            $this->model = $model; // Set the model of the car
        }
    }

    // Instantiate the Car class with color and model arguments
    $myCar = new Car('blue', 'Honda');

    // Access and output the color property of the Car object
    echo $myCar->color; // Outputs: blue
?>
`,
                "explanation": "In this example, the `Car` class has a constructor that accepts two parameters: `$color` and `$model`. These values are assigned to the object's properties when the object is instantiated. The constructor is automatically invoked when `$myCar` is created."
            },
            {
                "title": "Constructor Overloading",
                "content": "PHP does not support constructor overloading directly, meaning you can’t define multiple constructors with different numbers of parameters. However, you can simulate constructor overloading by using default parameters. This way, you can create constructors that can be called with or without arguments.",
                "code": `
<?php
    // Define the Car class
    class Car {
        public $color;

        // Constructor with a default value for the color
        function __construct($color = 'red') {
            $this->color = $color; // Set the color of the car
        }
    }

    // Instantiate the Car class without passing an argument
    $myCar = new Car();

    // Access and output the color property of the Car object
    echo $myCar->color; // Outputs: red
?>
`,
                "explanation": "Here, the `__construct` method has a default value for `$color`. If no argument is passed during object creation, the default value of `red` is used. This simulates constructor overloading by providing flexibility in object creation."
            },
            {
                "title": "Constructor Chaining",
                "content": "Constructor chaining allows one constructor to call another constructor, typically in a parent class. This is useful in object-oriented inheritance when a child class needs to call a constructor from the parent class before executing its own logic.",
                "code": `
<?php
    // Define the Vehicle class
    class Vehicle {
        public $type;

        // Constructor of the Vehicle class
        function __construct($type) {
            $this->type = $type; // Set the type of the vehicle
        }
    }

    // Define the Car class that inherits from Vehicle
    class Car extends Vehicle {
        public $color;

        // Constructor of the Car class that calls the parent constructor
        function __construct($color, $type) {
            parent::__construct($type); // Chaining constructor from the parent class
            $this->color = $color; // Set the color of the car
        }
    }

    // Instantiate the Car class with color and type arguments
    $myCar = new Car('blue', 'sedan');

    // Access and output the color and type properties of the Car object
    echo $myCar->color; // Outputs: blue
    echo $myCar->type;  // Outputs: sedan
?>
`,
                "explanation": "In this example, the `Car` class calls the `Vehicle` class constructor using `parent::__construct()`. This ensures that the parent class's properties are initialized before the child class’s properties are set."
            },
            {
                "title": "Constructor with Variable Scope",
                "content": "Variables declared inside the constructor have local scope to the constructor itself. They can be used to initialize object properties, but they won’t be accessible outside the constructor unless explicitly assigned to properties or returned from the function.",
                "code": `
<?php
    // Define the Car class
    class Car {
        public $color;
        public $model;

        // Constructor that initializes properties
        function __construct($color, $model) {
            $this->color = $color; // Set the color of the car
            $this->model = $model; // Set the model of the car
            $temp = "temporary variable"; // Local variable
        }
    }

    // Instantiate the Car class
    $myCar = new Car('red', 'Toyota');

    // Access and output the color property of the Car object
    echo $myCar->color; // Outputs: red

    // The following will cause an error because $temp is a local variable
    // echo $temp; // Error: Undefined variable $temp
?>
`,
                "explanation": "In this example, the `$temp` variable is declared within the constructor. While it can be used to assist in setting object properties, it cannot be accessed outside the constructor. Only `$color` and `$model` are available after the object is created."
            },
            {
                "title": "Constructor with Type Hinting",
                "content": "PHP supports type hinting for constructor parameters. This allows you to specify the expected data type for the parameters passed into the constructor. Type hinting helps catch errors early by ensuring the correct data types are passed.",
                "code": `
<?php
    // Define the Car class
    class Car {
        public $color;
        public $year;

        // Constructor with type hinting for parameters
        function __construct(string $color, int $year) {
            $this->color = $color; // Set the color of the car
            $this->year = $year;   // Set the year of the car
        }
    }

    // Instantiate the Car class with appropriate arguments
    $myCar = new Car('green', 2022);

    // Access and output the color property of the Car object
    echo $myCar->color; // Outputs: green
?>
`,
                "explanation": "In this example, type hinting is used to specify that the `$color` parameter should be a string and the `$year` parameter should be an integer. This ensures that the values passed to the constructor must match these types, helping to avoid type-related errors."
            }
        ],
        "pitfalls": [
            "Ensure constructors are used to initialize necessary properties. Failing to do so may lead to objects that are not fully prepared for use.",
            "Be cautious with circular dependencies in constructors. If class `A` depends on class `B` and vice versa, it can lead to infinite loops or unexpected behavior.",
            "When chaining constructors, always call the parent constructor first to ensure proper initialization of inherited properties.",
            "Remember that variables declared within the constructor have local scope and cannot be accessed outside the constructor unless explicitly assigned to object properties."
        ],
        "summary": "Constructor functions are crucial for initializing object properties in PHP. They provide a mechanism to set up an object with initial data, support constructor chaining, type hinting, and can simulate overloading with default parameters.",
        "practiceQuestions": [
            {
                "question": "Create a constructor that initializes properties for a `Person` class, including name and age.",
                "hint": "Use the constructor to set these properties upon instantiation."
            },
            {
                "question": "What happens if a class does not have a constructor?",
                "hint": "Consider the default behavior of PHP constructors."
            },
            {
                "question": "Demonstrate how to use constructor chaining in PHP.",
                "hint": "Think about calling another constructor from within a constructor."
            },
            {
                "question": "How would you handle a constructor that accepts different types of parameters?",
                "hint": "Consider using type hinting to ensure the correct types are passed."
            },
            {
                "question": "What happens if a constructor has parameters with default values?",
                "hint": "Think about how the constructor behaves when no argument is passed."
            }
        ]
    },
   "php_inheritance": {
        "title": "Inheritance and Function Overriding",
        "description": "Explore how inheritance allows classes to extend functionality and override methods.",
        "sections": [
            {
                "title": "Understanding Inheritance",
                "content": "Inheritance is one of the key concepts in object-oriented programming (OOP). It allows a class (called a 'child' or 'subclass') to inherit properties and methods from another class (called a 'parent' or 'superclass'). This helps avoid repetition of code and promotes reusability. In PHP, inheritance is achieved using the `extends` keyword. A subclass can access all public and protected methods and properties of its parent class.",
                "code": `<?php
                    // Parent class Vehicle
                    class Vehicle {
                        // Method to start the vehicle
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    // Child class Car extends Vehicle
                    class Car extends Vehicle {
                        // Method specific to Car class
                        public function honk() {
                            return "Honk! Honk!";
                        }
                    }

                    // Create an instance of the Car class
                    $myCar = new Car();
                    // Call the inherited start method from Vehicle
                    echo $myCar->start(); // Outputs: Vehicle started
                ?>`,
                "explanation": "In this example, the `Car` class inherits the `start()` method from the `Vehicle` class. The child class `Car` has its own method `honk()`, but it can also access the `start()` method from the parent class."
            },
            {
                "title": "Overriding Methods",
                "content": "Method overriding allows a subclass to modify or 'override' the implementation of a method that was inherited from the parent class. This means that the child class can provide its own version of the method, which can be different from the parent class’s version. In PHP, you simply define a method with the same name in the child class to override the inherited method.",
                "code": `<?php
                    // Parent class Vehicle
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    // Child class Car overrides the start method
                    class Car extends Vehicle {
                        public function start() {
                            return "Car started with a roar!";
                        }
                    }

                    // Create an instance of Car
                    $myCar = new Car();
                    // Call the overridden start method
                    echo $myCar->start(); // Outputs: Car started with a roar!
                ?>`,
                "explanation": "In this example, the `Car` class overrides the `start()` method from the `Vehicle` class. The overridden method in `Car` now returns a different message. When we create a `Car` object, it calls the overridden method rather than the parent class method."
            },
            {
                "title": "Access Modifiers in Inheritance",
                "content": "In PHP, access modifiers (public, protected, private) control the visibility of class members (properties and methods). When overriding a method, you must ensure that the access modifier of the method in the child class is compatible with the parent class method’s access modifier. For example, if a method in the parent class is `public`, you can only override it with a `public` or `protected` method in the child class, but not with a `private` method.",
                "code": `<?php
                    // Parent class Vehicle with a protected method
                    class Vehicle {
                        protected function start() {
                            return "Vehicle started";
                        }
                    }

                    // Child class Car extends Vehicle and overrides the protected method
                    class Car extends Vehicle {
                        // Override with a protected method
                        public function start() {
                            return "Car started with a roar!";
                        }
                    }

                    // Create an instance of Car
                    $myCar = new Car();
                    // Call the overridden start method (accessible due to protected visibility)
                    echo $myCar->start(); // Outputs: Car started with a roar!
                ?>`,
                "explanation": "In this example, the `start()` method in the parent class `Vehicle` is `protected`, which means it is accessible within the class itself and by subclasses. The `Car` class overrides the method with a `protected` visibility modifier. It’s important to maintain the correct visibility to avoid errors."
            },
            {
                "title": "The `parent` Keyword in PHP",
                "content": "The `parent` keyword in PHP is used to refer to the parent class from within the child class. It is commonly used when you want to call a method from the parent class within the child class, especially when you have overridden a method. The `parent` keyword is used to access the parent class's properties or methods directly.",
                "code": `<?php
                    // Parent class Vehicle
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    // Child class Car overrides the start method but calls the parent method
                    class Car extends Vehicle {
                        public function start() {
                            // Call the parent class's start method
                            return parent::start() . " and now the car roars!";
                        }
                    }

                    // Create an instance of Car
                    $myCar = new Car();
                    // Call the start method, which uses the parent method
                    echo $myCar->start(); // Outputs: Vehicle started and now the car roars!
                ?>`,
                "explanation": "Here, the `Car` class overrides the `start()` method but uses `parent::start()` to call the `start()` method from the `Vehicle` class. This allows the child class to build on the functionality of the parent class while adding its own modifications."
            },
            {
                "title": "Abstract Classes and Inheritance",
                "content": "An abstract class in PHP is a class that cannot be instantiated on its own. Instead, it is meant to be inherited by other classes. Abstract classes can define abstract methods, which must be implemented by the subclasses. This is useful when you want to define a common interface for all subclasses but leave the implementation details to each subclass.",
                "code": `<?php
                    // Abstract class Vehicle with an abstract method
                    abstract class Vehicle {
                        abstract public function start();
                    }

                    // Concrete class Car extends Vehicle and implements the start method
                    class Car extends Vehicle {
                        public function start() {
                            return "Car started with a roar!";
                        }
                    }

                    // Create an instance of Car
                    $myCar = new Car();
                    // Call the start method
                    echo $myCar->start(); // Outputs: Car started with a roar!
                ?>`,
                "explanation": "In this example, the `Vehicle` class is abstract and has an abstract method `start()`. The `Car` class must implement the `start()` method, as it extends the abstract `Vehicle` class. Abstract classes allow you to define common behaviors while leaving the specifics to the subclasses."
            }
        ],
        "pitfalls": [
            "Be careful with method visibility when overriding. Ensure that the access level (public, protected, private) is appropriate and matches the parent class.",
            "Avoid deep inheritance hierarchies. They can make your code more difficult to maintain and understand.",
            "Make sure to use the `parent` keyword correctly when calling methods from the parent class in the child class.",
            "Ensure that abstract methods in an abstract class are implemented in the subclass. If not, PHP will throw an error."
        ],
        "summary": "Inheritance allows for code reuse and extending functionality. Method overriding provides a way to modify inherited methods. Understanding access modifiers, the `parent` keyword, and abstract classes will help you work with inheritance more effectively. Avoid deep inheritance chains to keep your code clean and maintainable.",
        "practiceQuestions": [
            {
                "question": "Create a `Truck` class that extends `Vehicle` and overrides the `start` method.",
                "hint": "In the `Truck` class, override the `start` method to provide a truck-specific implementation."
            },
            {
                "question": "What is the purpose of the `parent` keyword in method overriding?",
                "hint": "Think about how `parent::` allows you to call methods from the parent class even when overridden in the child class."
            },
            {
                "question": "Explain the difference between an abstract class and a regular class.",
                "hint": "Consider the purpose of abstract classes and why they can't be instantiated directly."
            }
        ]
    },

    "php_interfaces_abstract": {
        "title": "PHP Interfaces and Abstract Classes",
        "description": "Learn how to define interfaces and abstract classes to enforce contracts in your PHP applications.",
        "sections": [
            {
                "title": "Understanding Interfaces",
                "content": "An interface in PHP defines a contract that classes must follow. It contains method declarations without any implementation. The classes that implement the interface must provide the method implementations. Interfaces help enforce structure in your application, ensuring that any class that implements an interface follows the rules set by the interface. Interfaces can be implemented by multiple classes, which makes them useful for creating common functionality across different class hierarchies.",
                "code": `<?php
                    // Defining an interface with a method declaration
                    interface Drivable {
                        // Method signature, no implementation here
                        public function drive();
                    }

                    // A class implementing the Drivable interface
                    class Car implements Drivable {
                        // Implementing the drive method
                        public function drive() {
                            return "Driving the car.";
                        }
                    }

                    // Create an instance of Car
                    $car = new Car();
                    // Calling the implemented method from the interface
                    echo $car->drive(); // Outputs: Driving the car.
                ?>`,
                "explanation": "In this example, the `Drivable` interface defines a contract with the method `drive()`. The `Car` class implements this interface and provides its own version of the `drive()` method. Any class that implements the `Drivable` interface must implement this method."
            },
            {
                "title": "Using Abstract Classes",
                "content": "An abstract class is a class that cannot be instantiated directly. It allows you to define methods with or without a default implementation. Abstract methods in an abstract class must be implemented by any class that extends it. An abstract class is useful when you want to provide a base implementation that can be shared by multiple subclasses, but still require subclasses to define certain behaviors themselves.",
                "code": `<?php
                    // Defining an abstract class with an abstract method
                    abstract class Animal {
                        // Abstract method that subclasses must implement
                        abstract protected function sound();

                        // A concrete method that can be inherited by subclasses
                        public function eat() {
                            return "Eating food.";
                        }
                    }

                    // A subclass that extends Animal and implements the abstract method
                    class Dog extends Animal {
                        // Implementing the abstract method
                        protected function sound() {
                            return "Bark!";
                        }
                    }

                    // Create an instance of Dog
                    $dog = new Dog();
                    // Calling the implemented abstract method and the inherited concrete method
                    echo $dog->sound(); // Outputs: Bark!
                    echo $dog->eat();   // Outputs: Eating food.
                ?>`,
                "explanation": "Here, the `Animal` class is abstract and defines both an abstract method `sound()` and a concrete method `eat()`. The `Dog` class extends `Animal` and provides an implementation for the abstract method `sound()`. This allows for a default implementation of common behaviors like `eat()`, while forcing the subclass to define specific behaviors like `sound()`."
            },
            {
                "title": "Key Differences Between Interfaces and Abstract Classes",
                "content": "While both interfaces and abstract classes are used to define contracts for classes, there are important differences between them:\n1. **Multiple Inheritance**: A class can implement multiple interfaces, but it can only extend one abstract class.\n2. **Method Implementation**: An abstract class can have both abstract (without implementation) and concrete (with implementation) methods, whereas an interface can only contain method signatures.\n3. **Instantiation**: An abstract class can contain properties, while an interface cannot. An abstract class can be instantiated if all abstract methods are implemented, while an interface requires all methods to be implemented before the class can be instantiated.",
                "code": `<?php
                    // Abstract class example with both abstract and concrete methods
                    abstract class Vehicle {
                        public function startEngine() {
                            return "Engine started.";
                        }

                        abstract public function honk();
                    }

                    // Interface example
                    interface Playable {
                        public function play();
                    }

                    // A class implementing both abstract class and interface
                    class Car extends Vehicle implements Playable {
                        public function honk() {
                            return "Car honking!";
                        }

                        public function play() {
                            return "Playing car radio.";
                        }
                    }

                    // Create an instance of Car
                    $car = new Car();
                    echo $car->startEngine(); // Outputs: Engine started.
                    echo $car->honk();        // Outputs: Car honking!
                    echo $car->play();        // Outputs: Playing car radio.
                ?>`,
                "explanation": "In this example, the `Car` class implements the `Playable` interface and extends the `Vehicle` abstract class. It implements all methods from both the interface and the abstract class. This shows how a class can use both abstract classes and interfaces to inherit functionality and fulfill multiple contracts."
            },
            {
                "title": "Interface Inheritance",
                "content": "Interfaces can extend other interfaces, allowing you to build more specific contracts from general ones. A class that implements an interface that extends other interfaces must implement all the methods declared in the parent interfaces. This helps in creating complex contracts by combining multiple simpler ones.",
                "code": `<?php
                    // Defining a basic interface
                    interface Shape {
                        public function area();
                    }

                    // Extending the Shape interface to create a more specific interface
                    interface 3DShape extends Shape {
                        public function volume();
                    }

                    // A class that implements the 3DShape interface
                    class Cube implements 3DShape {
                        public function area() {
                            return 6 * pow(4, 2); // Area of cube faces
                        }

                        public function volume() {
                            return pow(4, 3); // Volume of cube
                        }
                    }

                    // Create an instance of Cube
                    $cube = new Cube();
                    echo $cube->area();   // Outputs: 96
                    echo $cube->volume(); // Outputs: 64
                ?>`,
                "explanation": "Here, the `3DShape` interface extends the `Shape` interface. The `Cube` class implements the `3DShape` interface and provides the implementations for both the `area()` and `volume()` methods. This demonstrates how interface inheritance works in PHP."
            },
            {
                "title": "Implementing Multiple Interfaces in a Single Class",
                "content": "In PHP, a class can implement multiple interfaces, allowing it to fulfill multiple contracts. Each interface can define a set of methods that the class must implement. This allows a class to be more flexible and adhere to multiple different behaviors or functionalities simultaneously.",
                "code": `<?php
                    // Interface for printing documents
                    interface Printable {
                        public function printDocument();
                    }

                    // Interface for scanning documents
                    interface Scannable {
                        public function scanDocument();
                    }

                    // A class implementing both Printable and Scannable interfaces
                    class MultiFunctionPrinter implements Printable, Scannable {
                        public function printDocument() {
                            return "Printing document.";
                        }

                        public function scanDocument() {
                            return "Scanning document.";
                        }
                    }

                    // Create an instance of MultiFunctionPrinter
                    $printer = new MultiFunctionPrinter();
                    echo $printer->printDocument(); // Outputs: Printing document.
                    echo $printer->scanDocument();  // Outputs: Scanning document.
                ?>`,
                "explanation": "In this example, the `MultiFunctionPrinter` class implements both the `Printable` and `Scannable` interfaces. This allows the class to provide functionality for both printing and scanning, demonstrating how a class can implement multiple interfaces."
            }
        ],
        "pitfalls": [
            "Interfaces can only contain method declarations and cannot have properties or implemented methods.",
            "When implementing multiple interfaces, ensure that there are no conflicting method names or signatures.",
            "Abstract classes can contain both abstract and concrete methods, but make sure to define abstract methods that must be implemented by subclasses."
        ],
        "summary": "Interfaces and abstract classes provide powerful ways to enforce structure and behavior in PHP applications. Interfaces define contracts that classes must implement, while abstract classes allow partial implementation. By using both, you can design flexible, maintainable, and reusable code.",
        "practiceQuestions": [
            {
                "question": "Define an interface `Shape` with methods for calculating area and perimeter.",
                "hint": "Implement this interface in classes like `Circle` and `Square`."
            },
            {
                "question": "What is the difference between an abstract class and an interface?",
                "hint": "Think about the ability to provide method implementations and the concept of inheritance."
            },
            {
                "question": "Demonstrate how to implement multiple interfaces in a single class.",
                "hint": "Think about how a class can fulfill multiple contracts by implementing more than one interface."
            }
        ]
    },
   
    "mysql_database_basics": {
        "title": "Database Basics",
        "description": "Understand the fundamentals of databases, including structure, relationships, and basic terminology.",
        "sections": [
            {
                "title": "What is a Database?",
                "content": "A database is a structured collection of data that is stored and managed electronically. Databases allow users to efficiently store, update, and retrieve data. They are fundamental in managing large amounts of information and provide mechanisms to query and update data. Examples of databases include MySQL, PostgreSQL, Oracle, and MongoDB.",
                "code": `-- Example of a simple database creation
                CREATE DATABASE school;`
            },
            {
                "title": "Database Structure",
                "content": "Databases are made up of tables, which are collections of rows and columns. Each table represents a specific entity (e.g., 'students', 'employees'). Columns in the table represent attributes of the entity, and rows contain individual records. The database structure can be relational or non-relational. Relational databases like MySQL store data in tables with relationships between them, while non-relational databases like MongoDB store data in flexible formats like documents.",
                "code": `-- Creating a table for storing student information
                CREATE TABLE students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    age INT
                );`
            },
            {
                "title": "Primary Keys and Foreign Keys",
                "content": "A primary key is a unique identifier for each record in a table. It ensures that each row in the table can be uniquely identified. A foreign key, on the other hand, is a column or a group of columns used to establish a link between the data in two tables. Foreign keys ensure referential integrity, meaning that a record in one table corresponds to a record in another table.",
                "code": `-- Example of a table with a foreign key
                CREATE TABLE courses (
                    course_id INT AUTO_INCREMENT PRIMARY KEY,
                    course_name VARCHAR(100),
                    student_id INT,
                    FOREIGN KEY (student_id) REFERENCES students(id)
                );`
            },
            {
                "title": "Relationships Between Tables",
                "content": "Databases use relationships to link data across multiple tables. There are three main types of relationships: One-to-One, One-to-Many, and Many-to-Many.\n- **One-to-One**: One record in a table is linked to one record in another table.\n- **One-to-Many**: One record in a table can be linked to many records in another table.\n- **Many-to-Many**: Multiple records in one table can be linked to multiple records in another table, often requiring a third table to manage the relationship.",
                "code": `-- Many-to-Many Relationship Example
                CREATE TABLE enrollments (
                    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
                    student_id INT,
                    course_id INT,
                    FOREIGN KEY (student_id) REFERENCES students(id),
                    FOREIGN KEY (course_id) REFERENCES courses(course_id)
                );`
            },
            {
                "title": "Data Types in Databases",
                "content": "In databases, each column in a table has a specific data type that defines the kind of data that can be stored in that column. Common data types include:\n- **INT**: Used for integers (whole numbers).\n- **VARCHAR**: Used for variable-length strings (text).\n- **DATE**: Used for storing dates.\n- **BOOLEAN**: Used for storing true/false values.\nUnderstanding data types helps ensure data integrity and optimizes storage.",
                "code": `-- Example of defining various data types in a table
                CREATE TABLE events (
                    event_id INT AUTO_INCREMENT PRIMARY KEY,
                    event_name VARCHAR(100),
                    event_date DATE,
                    is_active BOOLEAN
                );`
            }
        ],
        "pitfalls": [
            "Don't forget to define primary keys in your tables to ensure each record is unique.",
            "Be cautious about choosing appropriate data types for each column to optimize storage and query performance.",
            "Always ensure referential integrity by properly defining foreign keys when relating tables.",
            "Avoid using excessive VARCHAR lengths without good reason, as it can lead to inefficient storage."
        ],
        "summary": "A solid understanding of database basics is crucial for managing data effectively. It provides a foundation for more advanced database operations and helps in designing well-structured and efficient databases.",
        "practiceQuestions": [
            {
                "question": "What are the main components of a database?",
                "hint": "Think about the structure and elements that make up a database."
            },
            {
                "question": "Explain the difference between a primary key and a foreign key.",
                "hint": "Consider how they relate tables and ensure data integrity."
            },
            {
                "question": "Create a simple table for a library system.",
                "hint": "Include fields like book title, author, and publication year."
            },
            {
                "question": "What is a Many-to-Many relationship in a database?",
                "hint": "Think about how data in one table can be related to data in another table, with an intermediate table managing the relationships."
            },
            {
                "question": "What are some common data types in a relational database?",
                "hint": "Consider types like INT, VARCHAR, DATE, and BOOLEAN, and their purposes in storing different types of data."
            }
        ]
    },
    "phpmyadmin": {
        "title": "Using PHPMyAdmin",
        "description": "Learn how to manage MySQL databases through PHPMyAdmin, a web-based database management tool that simplifies database administration tasks.",
        "sections": [
            {
                "title": "Introduction to PHPMyAdmin",
                "content": "PHPMyAdmin is a free, open-source software tool written in PHP, designed to handle MySQL database administration tasks through a web interface. It allows users to perform a wide range of database-related operations, such as creating, editing, and deleting databases and tables, running SQL queries, and importing/exporting data. PHPMyAdmin is widely used by developers and administrators due to its ease of use and accessibility via a web browser, eliminating the need for command-line interactions.",
                "code": `-- Access PHPMyAdmin in your web browser at localhost/phpmyadmin`
            },
            {
                "title": "Creating a Database",
                "content": "Creating a database in PHPMyAdmin is a straightforward process. First, log in to PHPMyAdmin and navigate to the 'Databases' tab. Enter a name for your new database and click the 'Create' button. PHPMyAdmin will then create the database and display it on the left sidebar. Once the database is created, you can begin creating tables, adding columns, and entering data. You can also specify collation settings and choose a default character set for the database.",
                "code": `-- In PHPMyAdmin, simply enter the database name and click 'Create'.`
            },
            {
                "title": "Creating Tables in PHPMyAdmin",
                "content": "After creating a database, the next step is to create tables to store data. In PHPMyAdmin, select the database you just created from the left sidebar and click on the 'Create Table' option. Enter the table name and the number of columns you need. Then, you can define each column's name, type (e.g., VARCHAR, INT), length, and other attributes (such as 'NOT NULL' or 'AUTO_INCREMENT'). You can also add indexes and set up foreign keys if necessary. Once the table structure is defined, click 'Save' to create the table.",
                "code": `-- Example of creating a table for storing student information
-- CREATE TABLE students (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100),
--     age INT
-- );`
            },
            {
                "title": "Running SQL Queries in PHPMyAdmin",
                "content": "One of the most powerful features of PHPMyAdmin is the ability to run custom SQL queries. To do this, select the database you want to work with and go to the 'SQL' tab. Here, you can enter any valid SQL query, such as SELECT, INSERT, UPDATE, DELETE, and more. After entering the SQL command, click 'Go' to execute it. The results will be displayed on the screen, and you can also see information about the query execution, such as the number of affected rows. This is useful for performing complex operations that cannot be done through the graphical interface.",
                "code": `-- Example of a SELECT query in PHPMyAdmin
SELECT * FROM students;`
            },
            {
                "title": "Managing Users and Permissions",
                "content": "In PHPMyAdmin, you can manage database users and assign permissions to control access. To do this, navigate to the 'User Accounts' tab in the main interface. Here, you can create new users, modify existing users, and assign specific permissions to each user. Permissions can be set for various operations, such as SELECT, INSERT, UPDATE, DELETE, and more. You can also limit user access to specific databases or tables for enhanced security. It's important to use proper user management to ensure the safety and integrity of your databases.",
                "code": `-- Example of granting a user SELECT permission on a database
GRANT SELECT ON school.* TO 'username'@'localhost';`
            },
            {
                "title": "Importing and Exporting Data",
                "content": "PHPMyAdmin makes it easy to import and export data from MySQL databases. The 'Import' and 'Export' tabs allow you to transfer data between MySQL and various file formats, such as SQL, CSV, and Excel. To import data, select the database and go to the 'Import' tab. You can upload SQL files, CSV files, and other formats, and PHPMyAdmin will automatically process them. Similarly, you can export data using the 'Export' tab, where you can choose the format and customize the export options. This feature is useful for backup and migration purposes.",
                "code": `-- Exporting data from PHPMyAdmin as SQL
-- Go to the 'Export' tab and choose the format (SQL, CSV, etc.)`
            },
            {
                "title": "Backup and Restore in PHPMyAdmin",
                "content": "Backing up and restoring databases is a critical task for database administrators. In PHPMyAdmin, you can back up your entire database or individual tables. To back up, navigate to the 'Export' tab, where you can choose from various export options like SQL, CSV, or other formats. It's a good practice to back up your database regularly to prevent data loss. Restoring a backup can also be done through PHPMyAdmin by navigating to the 'Import' tab and uploading the SQL file you want to restore. PHPMyAdmin will handle the restoration process, ensuring your data is restored correctly.",
                "code": `-- Example of importing a backup SQL file
-- Go to the 'Import' tab, choose the SQL file, and click 'Go'`
            }
        ],
        "pitfalls": [
            "Be careful when performing operations; always back up your database before making major changes.",
            "Check user permissions if you encounter access issues or errors.",
            "Always validate SQL queries before running them, especially for DELETE or UPDATE statements.",
            "Avoid giving users unnecessary privileges; always follow the principle of least privilege.",
            "Make sure to properly configure the 'Collation' and 'Character Set' when creating databases to avoid encoding issues."
        ],
        "summary": "PHPMyAdmin is a powerful, user-friendly tool for managing MySQL databases through a web interface. It simplifies common database administration tasks, including creating databases, tables, and running queries. It also provides functionality for user management, importing/exporting data, and backing up/restoring databases. By leveraging PHPMyAdmin, developers and administrators can efficiently manage their MySQL databases without needing to rely on complex command-line operations.",
        "practiceQuestions": [
            {
                "question": "How do you create a new database using PHPMyAdmin?",
                "hint": "Refer to the user interface and available options."
            },
            {
                "question": "What are some common tasks you can perform in PHPMyAdmin?",
                "hint": "Think about operations like creating tables, running queries, and managing users."
            },
            {
                "question": "Explain how to export a database from PHPMyAdmin.",
                "hint": "Consider the format options available for export and the steps to complete it."
            },
            {
                "question": "How do you manage user permissions in PHPMyAdmin?",
                "hint": "Think about the 'User Accounts' tab and how permissions are assigned."
            },
            {
                "question": "Describe the process of importing and exporting data in PHPMyAdmin.",
                "hint": "Consider both the import and export tabs, and the file formats supported."
            }
        ]
    },
   "mysql_connect": {
        "title": "Connecting to MySQL with PHP",
        "description": "Learn how to establish a connection to a MySQL database using PHP.",
        "sections": [
            {
                "title": "Introduction to Database Connections",
                "content": "In web development, establishing a connection between your PHP application and a MySQL database is crucial for managing and manipulating data. PHP provides two primary methods to connect to MySQL databases: MySQLi (MySQL Improved) and PDO (PHP Data Objects). Each has its advantages and trade-offs, and the choice depends on factors such as ease of use, flexibility, and security. This section will guide you through both options.",
                "code": `// No code here, this is a conceptual section explaining the need for database connections.`
            },
            {
                "title": "Using MySQLi to Connect",
                "content": "MySQLi (MySQL Improved) is an extension to connect to MySQL databases with a simple and easy-to-understand interface. It is designed for use with MySQL databases, supporting both procedural and object-oriented programming styles.",
                "code": `<?php
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
                "title": "Using PDO to Connect",
                "content": "PHP Data Objects (PDO) is a database access layer providing a uniform method of access to multiple databases. It offers a more flexible and secure approach to database interactions. With PDO, you can work with various database types, including MySQL, PostgreSQL, SQLite, and others. PDO also supports named placeholders and prepared statements, enhancing security against SQL injection attacks.",
                "code": `<?php
                    try {
                        $conn = new PDO("mysql:host=localhost;dbname=school", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo "Connected successfully";
                    } catch (PDOException $e) {
                        echo "Connection failed: " . $e->getMessage();
                    }
                ?>`
            },
            {
                "title": "Using MySQLi with Prepared Statements",
                "content": "Prepared statements help prevent SQL injection, which is one of the most common security vulnerabilities in web applications. Using MySQLi, you can prepare SQL queries by separating query structure from user data. This section demonstrates how to use prepared statements with MySQLi.",
                "code": `<?php
                    $conn = new mysqli($servername, $username, $password, $dbname);
                    
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // Prepare the SQL statement
                    $stmt = $conn->prepare("SELECT id, name FROM students WHERE age > ?");
                    $stmt->bind_param("i", $age);  // "i" for integer
                    $age = 18;
                    $stmt->execute();
                    $stmt->bind_result($id, $name);

                    // Fetch and display the results
                    while ($stmt->fetch()) {
                        echo "ID: $id, Name: $name\n";
                    }
                    $stmt->close();
                ?>`
            },
            {
                "title": "Using PDO with Prepared Statements",
                "content": "Similar to MySQLi, PDO also supports prepared statements for executing SQL queries securely. This method is highly recommended to prevent SQL injection attacks. Prepared statements are also more flexible with respect to the types of databases you can connect to. Below is an example of using PDO with prepared statements.",
                "code": `<?php
                    try {
                        $conn = new PDO("mysql:host=localhost;dbname=school", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                        // Prepare the SQL statement
                        $stmt = $conn->prepare("SELECT id, name FROM students WHERE age > :age");
                        $stmt->bindParam(':age', $age, PDO::PARAM_INT);
                        $age = 18;
                        $stmt->execute();

                        // Fetch and display the results
                        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                            echo "ID: " . $row['id'] . ", Name: " . $row['name'] . "\n";
                        }
                    } catch (PDOException $e) {
                        echo "Connection failed: " . $e->getMessage();
                    }
                ?>`
            },
            {
                "title": "Error Handling and Debugging",
                "content": "When working with database connections, it is essential to handle errors properly. Both MySQLi and PDO provide error handling mechanisms to catch and manage exceptions. It's crucial not to expose database errors to the end-user, as this can reveal sensitive information. Instead, you should handle errors gracefully and log them for debugging purposes.",
                "code": `<?php
                    // MySQLi Error Handling Example
                    $conn = new mysqli($servername, $username, $password, $dbname);
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // PDO Error Handling Example
                    try {
                        $conn = new PDO("mysql:host=localhost;dbname=school", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    } catch (PDOException $e) {
                        echo "Connection failed: " . $e->getMessage();
                    }
                ?>`
            }
        ],
        "pitfalls": [
            "Always handle connection errors gracefully to avoid revealing sensitive information.",
            "Use prepared statements to prevent SQL injection attacks.",
            "Ensure that you are closing database connections after use to free up resources.",
            "Do not expose database credentials in your code; use environment variables or config files.",
            "Remember to handle exceptions properly when using PDO to catch potential errors."
        ],
        "summary": "Connecting to a MySQL database with PHP is an essential skill for web developers. Both MySQLi and PDO offer different methods for connecting to MySQL databases. MySQLi is simple and easy to use for MySQL-specific tasks, while PDO provides a more flexible and secure approach. Understanding how to handle errors and use prepared statements is crucial for secure and efficient database interactions.",
        "practiceQuestions": [
            {
                "question": "Write a PHP script to connect to a MySQL database using MySQLi.",
                "hint": "Use the `new mysqli` constructor with proper parameters."
            },
            {
                "question": "What are the advantages of using PDO over MySQLi?",
                "hint": "Consider aspects like flexibility, error handling, and support for multiple databases."
            },
            {
                "question": "How do you prevent SQL injection when using MySQLi?",
                "hint": "Look into using prepared statements with bound parameters."
            },
            {
                "question": "Explain how PDO handles errors differently from MySQLi.",
                "hint": "Think about how exceptions are thrown and managed."
            },
            {
                "question": "How do you securely store database credentials in PHP?",
                "hint": "Consider using environment variables or configuration files."
            }
        ]
    },
   "mysql_crud_operations": {
        "title": "MySQL CRUD Operations",
        "description": "Understand the basics of CRUD operations: Create, Read, Update, and Delete in MySQL.",
        "sections": [
            {
                "title": "Introduction to CRUD Operations",
                "content": "CRUD stands for Create, Read, Update, and Delete. These operations are fundamental to interacting with any relational database. This section will introduce the basic operations you will use when managing data in MySQL. Understanding how to perform each of these operations is crucial for developing data-driven applications.",
                "code": "// No code here, this is a conceptual section explaining CRUD operations."
            },
            {
                "title": "Creating Records (INSERT INTO)",
                "content": "To create a new record in a MySQL database, you use the `INSERT INTO` statement. This operation allows you to add a new row of data to a specific table.",
                "code": `<?php
                    $sql = "INSERT INTO students (name, age) VALUES ('John Doe', 20)";
                    if ($conn->query($sql) === TRUE) {
                        echo "New record created successfully";
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                ?>`
            },
            {
                "title": "Reading Records (SELECT)",
                "content": "To read or retrieve data from a table, you use the `SELECT` statement. You can specify which columns to retrieve and apply filters using WHERE clauses.",
                "code": `<?php
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
                "title": "Updating Records (UPDATE)",
                "content": "To update existing records, use the `UPDATE` statement. This allows you to modify one or more values in a specific row, based on a condition you provide.",
                "code": `<?php
                    $sql = "UPDATE students SET age=21 WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record updated successfully";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                ?>`
            },
            {
                "title": "Deleting Records (DELETE FROM)",
                "content": "To delete a record, use the `DELETE FROM` statement. Be cautious with this operation, especially when not using a `WHERE` clause, as it can delete all records in a table.",
                "code": `<?php
                    $sql = "DELETE FROM students WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record deleted successfully";
                    } else {
                        echo "Error deleting record: " . $conn->error;
                    }
                ?>`
            },
            {
                "title": "Using WHERE Clauses to Filter Data",
                "content": "The `WHERE` clause is used in the `SELECT`, `UPDATE`, and `DELETE` statements to filter data based on specified conditions. Without the `WHERE` clause, these operations will affect all rows in the table.",
                "code": `<?php
                    // Example of filtering data
                    $sql = "SELECT * FROM students WHERE age > 18";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using Prepared Statements for Security",
                "content": "Prepared statements help prevent SQL injection attacks by separating SQL logic from user inputs. This is especially important when dealing with user-generated data.",
                "code": `<?php
                    $stmt = $conn->prepare("INSERT INTO students (name, age) VALUES (?, ?)");
                    $stmt->bind_param("si", $name, $age);
                    $name = "Jane Doe";
                    $age = 22;
                    $stmt->execute();
                    echo "New record created successfully";
                    $stmt->close();
                ?>`
            },
            {
                "title": "Limiting Results with LIMIT",
                "content": "The `LIMIT` keyword is used in `SELECT` statements to restrict the number of rows returned. This is useful when you only want a subset of the data or for pagination.",
                "code": `<?php
                    $sql = "SELECT * FROM students LIMIT 5";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Handling Multiple SQL Queries in One Request",
                "content": "You can execute multiple SQL queries in one request by separating them with semicolons. Be cautious when doing this as it may open your application to SQL injection vulnerabilities if not properly handled.",
                "code": `<?php
                    $sql = "UPDATE students SET age=22 WHERE name='Jane Doe'; DELETE FROM students WHERE name='John Doe';";
                    if ($conn->multi_query($sql)) {
                        echo "Multiple queries executed successfully";
                    } else {
                        echo "Error executing queries: " . $conn->error;
                    }
                ?>`
            }
        ],
        "pitfalls": [
            "Always validate user input to avoid SQL injection.",
            "Be cautious with DELETE operations; consider using WHERE clauses carefully.",
            "Remember to close the prepared statements and connections to free up resources.",
            "Ensure you handle empty results from SELECT queries gracefully.",
            "Use LIMIT in SELECT queries when you need to control the number of rows returned."
        ],
        "summary": "CRUD operations form the backbone of database interactions, enabling the full cycle of data management in applications. From inserting new records to updating and deleting existing ones, these operations allow dynamic and efficient management of data.",
        "practiceQuestions": [
            {
                "question": "Write SQL commands to insert, select, update, and delete records in a `products` table.",
                "hint": "Consider a structure for the `products` table with at least three fields."
            },
            {
                "question": "How can you prevent SQL injection when performing CRUD operations?",
                "hint": "Think about using prepared statements."
            },
            {
                "question": "What are the consequences of running a DELETE statement without a WHERE clause?",
                "hint": "Consider the impact on data integrity."
            },
            {
                "question": "How would you update the age of a student named 'Alice' to 25?",
                "hint": "Consider using the `UPDATE` statement with a `WHERE` clause."
            },
            {
                "question": "How can you retrieve the first 10 students from the database?",
                "hint": "Think about using the `LIMIT` clause in your `SELECT` statement."
            }
        ]
    },
    "mysql_where_orderby_groupby": {
        "title": "Using WHERE, Order By, and Group By",
        "description": "Learn how to filter, sort, and group records in MySQL queries for better data management.",
        "sections": [
            {
                "title": "Introduction to WHERE, ORDER BY, and GROUP BY",
                "content": "The `WHERE`, `ORDER BY`, and `GROUP BY` clauses are essential for manipulating and managing data in MySQL. These clauses allow you to filter, sort, and group data for better querying and reporting. Understanding how to use them effectively can enhance your SQL queries and provide you with more powerful data insights.",
                "code": "// This section introduces the concepts of WHERE, ORDER BY, and GROUP BY without specific code."
            },
            {
                "title": "Using WHERE Clause",
                "content": "The `WHERE` clause is used to filter records based on specified conditions. It is applied to `SELECT`, `UPDATE`, `DELETE`, and other SQL statements to return rows that meet a particular condition.",
                "code": `<?php
                    $sql = "SELECT * FROM students WHERE age > 18";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using ORDER BY Clause",
                "content": "The `ORDER BY` clause is used to sort the result set by one or more columns in ascending (ASC) or descending (DESC) order. This helps in organizing the result based on specific criteria, such as sorting by name, age, or any other column.",
                "code": `<?php
                    $sql = "SELECT * FROM students ORDER BY age DESC";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using GROUP BY Clause",
                "content": "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows, often used with aggregate functions such as COUNT, SUM, AVG, MAX, and MIN. It is useful for summarizing data, such as finding the number of students per age group.",
                "code": `<?php
                    $sql = "SELECT age, COUNT(*) as count FROM students GROUP BY age";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Age: " . $row["age"]. " - Count: " . $row["count"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Combining WHERE, ORDER BY, and GROUP BY",
                "content": "You can combine `WHERE`, `ORDER BY`, and `GROUP BY` to filter, sort, and group your data in a more refined way. For example, you can filter data by a condition, group the results by a column, and then sort the grouped data.",
                "code": `<?php
                    $sql = "SELECT age, COUNT(*) as count FROM students WHERE age > 18 GROUP BY age ORDER BY count DESC";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Age: " . $row["age"]. " - Count: " . $row["count"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using HAVING Clause with GROUP BY",
                "content": "The `HAVING` clause is used in combination with `GROUP BY` to filter the grouped results. Unlike `WHERE`, which filters rows before grouping, `HAVING` is applied after the grouping operation, allowing you to filter groups based on aggregate functions.",
                "code": `<?php
                    $sql = "SELECT age, COUNT(*) as count FROM students GROUP BY age HAVING count > 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Age: " . $row["age"]. " - Count: " . $row["count"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using Multiple Columns in ORDER BY",
                "content": "You can sort the results by multiple columns in `ORDER BY`. This is useful when you want to sort by one column and then by another column if there are ties (duplicate values).",
                "code": `<?php
                    $sql = "SELECT * FROM students ORDER BY age DESC, name ASC";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Performance Considerations with ORDER BY and GROUP BY",
                "content": "Both `ORDER BY` and `GROUP BY` can impact the performance of your queries, especially when dealing with large datasets. It's important to use indexing on the columns involved in these operations to improve query performance. Additionally, avoid unnecessary grouping or sorting to keep queries efficient.",
                "code": "// This section provides insights on performance optimizations rather than specific code."
            }
        ],
        "pitfalls": [
            "Be mindful of using GROUP BY without aggregate functions, as it may lead to unexpected results.",
            "Remember that ORDER BY can affect performance, especially with large datasets, so use it wisely.",
            "When using GROUP BY with aggregate functions, ensure that the fields being selected are part of the GROUP BY or used with an aggregate function.",
            "Avoid using HAVING unless necessary, as it can reduce the efficiency of your query."
        ],
        "summary": "Understanding how to use the `WHERE`, `ORDER BY`, and `GROUP BY` clauses effectively will allow you to write more powerful and efficient SQL queries. These clauses provide the flexibility to filter, sort, and group data, enabling more meaningful insights from your database.",
        "practiceQuestions": [
            {
                "question": "Write a SQL query to select students with ages between 18 and 25, ordered by name.",
                "hint": "Utilize both WHERE and ORDER BY clauses."
            },
            {
                "question": "Explain how GROUP BY works with aggregate functions like COUNT or AVG.",
                "hint": "Consider what happens when you group by age and calculate the count of students in each group."
            },
            {
                "question": "What happens if you use GROUP BY without an aggregate function?",
                "hint": "Think about how the query result would appear."
            },
            {
                "question": "How would you sort the result set by `age` in descending order, and then by `name` in ascending order?",
                "hint": "Use multiple columns in the ORDER BY clause."
            },
            {
                "question": "What is the difference between WHERE and HAVING?",
                "hint": "Consider when each is used in relation to filtering rows and groups."
            }
        ]
    },
   "sql_aggregate_functions": {
        "title": "SQL Aggregate Functions",
        "description": "Learn about SQL aggregate functions such as COUNT, SUM, AVG, MIN, and MAX for data analysis.",
        "sections": [
            {
                "title": "Introduction to Aggregate Functions",
                "content": "SQL aggregate functions allow you to perform calculations on multiple rows of data and return a single result. These functions are essential for summarizing data and generating reports. The most common aggregate functions include `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`. Understanding how to use these functions is critical for data analysis in SQL.",
                "code": "// This section introduces aggregate functions without specific code."
            },
            {
                "title": "Using COUNT",
                "content": "The `COUNT` function returns the number of rows that match a specified condition. It is useful for finding the total number of records in a table or within a particular group. You can use it with `*` to count all rows or with a specific column to count non-null values in that column.",
                "code": `<?php
                    $sql = "SELECT COUNT(*) as total_students FROM students";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Total Students: " . $row["total_students"];
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using SUM",
                "content": "The `SUM` function calculates the total sum of a numeric column. It's commonly used for aggregating financial, quantity, or any other numeric data. This function ignores NULL values in the column.",
                "code": `<?php
                    $sql = "SELECT SUM(age) as total_age FROM students";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Total Age of Students: " . $row["total_age"];
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using AVG",
                "content": "The `AVG` function returns the average value of a numeric column. It is helpful for calculating averages like the mean salary, average age, or average score in a dataset. Like `SUM`, it also ignores NULL values.",
                "code": `<?php
                    $sql = "SELECT AVG(age) as average_age FROM students";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Average Age: " . $row["average_age"];
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using MIN and MAX",
                "content": "The `MIN` and `MAX` functions return the minimum and maximum values from a specified column. These functions are useful for finding the extremes in a dataset, such as the oldest or youngest person, the lowest or highest score, etc.",
                "code": `<?php
                    $sql = "SELECT MIN(age) as youngest, MAX(age) as oldest FROM students";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Youngest Age: " . $row["youngest"] . " - Oldest Age: " . $row["oldest"];
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Using Aggregate Functions with GROUP BY",
                "content": "You can use aggregate functions with `GROUP BY` to perform calculations on each group of data. For example, you can calculate the total salary for each department or the average score for each class. The `GROUP BY` clause groups the rows based on the specified columns, and then aggregate functions are applied to each group.",
                "code": `<?php
                    $sql = "SELECT department, AVG(salary) as average_salary FROM employees GROUP BY department";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "Department: " . $row["department"] . " - Average Salary: " . $row["average_salary"];
                        }
                    } else {
                        echo "No results found";
                    }
                ?>`
            },
            {
                "title": "Handling NULL Values with Aggregate Functions",
                "content": "Aggregate functions in SQL ignore NULL values, but it’s important to understand how they affect your results. For example, when calculating the average, NULL values are not included in the calculation, which can sometimes lead to skewed results if not properly handled.",
                "code": "// No specific code, but keep in mind that NULLs are ignored in aggregate calculations."
            }
        ],
        "pitfalls": [
            "Always check for NULL values when using aggregate functions, as they are ignored in calculations but could impact your results.",
            "Understand the difference between aggregate functions and regular queries. Aggregate functions summarize data, while regular queries return individual rows.",
            "Ensure that the column used in an aggregate function is appropriate for the calculation, for example, use numeric columns with `SUM` or `AVG`."
        ],
        "summary": "SQL aggregate functions are essential tools for data analysis. They allow you to summarize, calculate, and report on large sets of data efficiently. By mastering functions like COUNT, SUM, AVG, MIN, and MAX, you can extract meaningful insights from your data with ease.",
        "practiceQuestions": [
            {
                "question": "Write a query to find the total number of students and their average age.",
                "hint": "Combine `COUNT` and `AVG` in a single query."
            },
            {
                "question": "How would you find the youngest and oldest student in the database?",
                "hint": "Utilize the `MIN` and `MAX` functions."
            },
            {
                "question": "What happens if you use aggregate functions without a `GROUP BY` clause?",
                "hint": "Consider the result set that is returned."
            },
            {
                "question": "Write a query to calculate the total and average salary for each department.",
                "hint": "Use `SUM` and `AVG` with `GROUP BY`."
            }
        ]
    }
};
