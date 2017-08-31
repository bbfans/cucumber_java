Feature: Belly
 This is description
   # This is comment

@Smoke
  Scenario Outline: a few cukes
    Given I have <cukes> cukes in my belly
    When I wait <hour> hour
    Then My belly should be:<sound>

    Examples:
      | cukes    | hour   |  sound     |
      |    30    |  1     |  silent    |
      |    42    |  2     |  growl   |




@Regression
Scenario Outline: a few cukes
  Given I have <cukes> cukes in my belly
  When I wait <hour> hour
  Then My belly should be:<sound>

  Examples:
    | cukes    | hour   |  sound     |
    |    32    |  2     |  silent    |
    |    45    |  4     |  growl   |

