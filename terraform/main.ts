import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AppEngineApplication } from "@cdktf/provider-google/lib/app-engine-application";
import { GoogleProvider } from "@cdktf/provider-google/lib/provider";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const projectId = "kintai-378808";
    const locationId = "asia-northeast1";

    new GoogleProvider(this, "google", {
      project: projectId,
    });

    new AppEngineApplication(this, "kintai-appengine", {
      project: projectId,
      locationId: locationId,
    });
  }
}

const app = new App();
new MyStack(app, "kintai-terraform");
app.synth();
