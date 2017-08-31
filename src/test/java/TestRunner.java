

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "Feature",
        glue= "setDefinition",
        plugin =  {"pretty","html:target/cucumber","json:target/cucumber/cucumber.json"},
        tags = "@Regression"
)
public class TestRunner {

//

}