import {
  DataExchangeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataExchangeClient";
import { CreateRevisionRequest, CreateRevisionResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateRevisionCommand,
  serializeAws_restJson1_1CreateRevisionCommand
} from "../protocols/Aws_restJson1_1";
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

export type CreateRevisionCommandInput = CreateRevisionRequest;
export type CreateRevisionCommandOutput = CreateRevisionResponse;

export class CreateRevisionCommand extends $Command<
  CreateRevisionCommandInput,
  CreateRevisionCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRevisionCommandInput, CreateRevisionCommandOutput> {
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
    input: CreateRevisionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateRevisionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateRevisionCommandOutput> {
    return deserializeAws_restJson1_1CreateRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
