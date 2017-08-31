$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "Belly",
  "description": "This is description",
  "id": "belly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I have \u003ccukes\u003e cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I wait \u003chour\u003e hour",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "My belly should be:\u003csound\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "belly;a-few-cukes;",
  "rows": [
    {
      "cells": [
        "cukes",
        "hour",
        "sound"
      ],
      "line": 26,
      "id": "belly;a-few-cukes;;1"
    },
    {
      "cells": [
        "32",
        "2",
        "silent"
      ],
      "line": 27,
      "id": "belly;a-few-cukes;;2"
    },
    {
      "cells": [
        "45",
        "4",
        "growl"
      ],
      "line": 28,
      "id": "belly;a-few-cukes;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I have 32 cukes in my belly",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I wait 2 hour",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "My belly should be:silent",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 7
    }
  ],
  "location": "Test_Steps.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 130002662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "Test_Steps.i_wait_hour(int)"
});
formatter.result({
  "duration": 92262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "silent",
      "offset": 19
    }
  ],
  "location": "Test_Steps.myBellyShouldBeSound(String)"
});
formatter.result({
  "duration": 2037787,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I have 45 cukes in my belly",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I wait 4 hour",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "My belly should be:growl",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 7
    }
  ],
  "location": "Test_Steps.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 61265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "Test_Steps.i_wait_hour(int)"
});
formatter.result({
  "duration": 77676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 19
    }
  ],
  "location": "Test_Steps.myBellyShouldBeSound(String)"
});
formatter.result({
  "duration": 47407,
  "status": "passed"
});
});