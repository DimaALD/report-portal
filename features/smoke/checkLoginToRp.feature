Feature: Log in to Report Portal

@smoke @MY
   Scenario Outline: Login to RP portal as <user>
   When Log in to RP as "<user>"
   And  Switch to "Filters" dashboard
   And  Click to "SETTINGS" icon on header
   When Log out
   
   Examples:
   | user |
   | admin|
   | user |