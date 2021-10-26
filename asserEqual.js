const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Asserstion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Asserstion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("I'll take a potato chip...", "I'll take a potato chip...");
assertEqual(10, 1);
assertEqual(1, 1);