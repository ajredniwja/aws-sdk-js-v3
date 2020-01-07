import {
  LightsailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LightsailClient";
import {
  CreateLoadBalancerTlsCertificateRequest,
  CreateLoadBalancerTlsCertificateResult
} from "../models/index";
import {
  deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand,
  serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateLoadBalancerTlsCertificateCommandInput = CreateLoadBalancerTlsCertificateRequest;
export type CreateLoadBalancerTlsCertificateCommandOutput = CreateLoadBalancerTlsCertificateResult;

export class CreateLoadBalancerTlsCertificateCommand extends $Command<
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLoadBalancerTlsCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateLoadBalancerTlsCertificateCommandInput,
    CreateLoadBalancerTlsCertificateCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLoadBalancerTlsCertificateCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateLoadBalancerTlsCertificateCommandOutput> {
    return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
