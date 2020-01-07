import {
  AnalyzeDocumentCommandInput,
  AnalyzeDocumentCommandOutput
} from "../commands/AnalyzeDocumentCommand";
import {
  DetectDocumentTextCommandInput,
  DetectDocumentTextCommandOutput
} from "../commands/DetectDocumentTextCommand";
import {
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput
} from "../commands/GetDocumentAnalysisCommand";
import {
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput
} from "../commands/GetDocumentTextDetectionCommand";
import {
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput
} from "../commands/StartDocumentAnalysisCommand";
import {
  StartDocumentTextDetectionCommandInput,
  StartDocumentTextDetectionCommandOutput
} from "../commands/StartDocumentTextDetectionCommand";
import {
  AccessDeniedException,
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  BadDocumentException,
  Block,
  BoundingBox,
  ContentClassifier,
  DetectDocumentTextRequest,
  DetectDocumentTextResponse,
  Document,
  DocumentLocation,
  DocumentMetadata,
  DocumentTooLargeException,
  EntityType,
  FeatureType,
  Geometry,
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  HumanLoopActivationOutput,
  HumanLoopConfig,
  HumanLoopDataAttributes,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  InternalServerError,
  InvalidJobIdException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LimitExceededException,
  NotificationChannel,
  Point,
  ProvisionedThroughputExceededException,
  Relationship,
  S3Object,
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  ThrottlingException,
  UnsupportedDocumentException,
  Warning
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AnalyzeDocumentCommand(
  input: AnalyzeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.AnalyzeDocument";
  let body: any = {};
  const wrappedBody: any = {
    AnalyzeDocumentRequest: serializeAws_json1_1AnalyzeDocumentRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AnalyzeDocument",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DetectDocumentTextCommand(
  input: DetectDocumentTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.DetectDocumentText";
  let body: any = {};
  const wrappedBody: any = {
    DetectDocumentTextRequest: serializeAws_json1_1DetectDocumentTextRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DetectDocumentText",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDocumentAnalysisCommand(
  input: GetDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.GetDocumentAnalysis";
  let body: any = {};
  const wrappedBody: any = {
    GetDocumentAnalysisRequest: serializeAws_json1_1GetDocumentAnalysisRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDocumentAnalysis",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDocumentTextDetectionCommand(
  input: GetDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.GetDocumentTextDetection";
  let body: any = {};
  const wrappedBody: any = {
    GetDocumentTextDetectionRequest: serializeAws_json1_1GetDocumentTextDetectionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDocumentTextDetection",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartDocumentAnalysisCommand(
  input: StartDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.StartDocumentAnalysis";
  let body: any = {};
  const wrappedBody: any = {
    StartDocumentAnalysisRequest: serializeAws_json1_1StartDocumentAnalysisRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartDocumentAnalysis",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartDocumentTextDetectionCommand(
  input: StartDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Textract.StartDocumentTextDetection";
  let body: any = {};
  const wrappedBody: any = {
    StartDocumentTextDetectionRequest: serializeAws_json1_1StartDocumentTextDetectionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartDocumentTextDetection",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AnalyzeDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AnalyzeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AnalyzeDocumentResponse(
    data.AnalyzeDocumentResponse,
    context
  );
  const response: AnalyzeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AnalyzeDocumentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AnalyzeDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = await deserializeAws_json1_1BadDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = await deserializeAws_json1_1DocumentTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.textract#HumanLoopQuotaExceededException":
      response = await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DetectDocumentTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectDocumentTextCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectDocumentTextResponse(
    data.DetectDocumentTextResponse,
    context
  );
  const response: DetectDocumentTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectDocumentTextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetectDocumentTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = await deserializeAws_json1_1BadDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = await deserializeAws_json1_1DocumentTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDocumentAnalysisCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDocumentAnalysisCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentAnalysisResponse(
    data.GetDocumentAnalysisResponse,
    context
  );
  const response: GetDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentAnalysisResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDocumentAnalysisCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      response = await deserializeAws_json1_1InvalidJobIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDocumentTextDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDocumentTextDetectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentTextDetectionResponse(
    data.GetDocumentTextDetectionResponse,
    context
  );
  const response: GetDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentTextDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDocumentTextDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      response = await deserializeAws_json1_1InvalidJobIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartDocumentAnalysisCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDocumentAnalysisCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentAnalysisResponse(
    data.StartDocumentAnalysisResponse,
    context
  );
  const response: StartDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDocumentAnalysisResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDocumentAnalysisCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = await deserializeAws_json1_1BadDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = await deserializeAws_json1_1DocumentTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartDocumentTextDetectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDocumentTextDetectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentTextDetectionResponse(
    data.StartDocumentTextDetectionResponse,
    context
  );
  const response: StartDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDocumentTextDetectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDocumentTextDetectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = await deserializeAws_json1_1BadDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = await deserializeAws_json1_1DocumentTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.textract#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    output.body,
    context
  );
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BadDocumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadDocumentException> => {
  const deserialized: any = deserializeAws_json1_1BadDocumentException(
    output.body,
    context
  );
  const contents: BadDocumentException = {
    __type: "BadDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DocumentTooLargeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DocumentTooLargeException> => {
  const deserialized: any = deserializeAws_json1_1DocumentTooLargeException(
    output.body,
    context
  );
  const contents: DocumentTooLargeException = {
    __type: "DocumentTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(
    output.body,
    context
  );
  const contents: HumanLoopQuotaExceededException = {
    __type: "HumanLoopQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(
    output.body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    __type: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    output.body,
    context
  );
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidJobIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidJobIdException(
    output.body,
    context
  );
  const contents: InvalidJobIdException = {
    __type: "InvalidJobIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    output.body,
    context
  );
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(
    output.body,
    context
  );
  const contents: InvalidS3ObjectException = {
    __type: "InvalidS3ObjectException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(
    output.body,
    context
  );
  const contents: ProvisionedThroughputExceededException = {
    __type: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    output.body,
    context
  );
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedDocumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedDocumentException(
    output.body,
    context
  );
  const contents: UnsupportedDocumentException = {
    __type: "UnsupportedDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AnalyzeDocumentRequest = (
  input: AnalyzeDocumentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Document !== undefined) {
    bodyParams["Document"] = serializeAws_json1_1Document(
      input.Document,
      context
    );
  }
  if (input.FeatureTypes !== undefined) {
    bodyParams["FeatureTypes"] = serializeAws_json1_1FeatureTypes(
      input.FeatureTypes,
      context
    );
  }
  if (input.HumanLoopConfig !== undefined) {
    bodyParams["HumanLoopConfig"] = serializeAws_json1_1HumanLoopConfig(
      input.HumanLoopConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ContentClassifiers = (
  input: Array<ContentClassifier | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DetectDocumentTextRequest = (
  input: DetectDocumentTextRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Document !== undefined) {
    bodyParams["Document"] = serializeAws_json1_1Document(
      input.Document,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Document = (
  input: Document,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Bytes !== undefined) {
    bodyParams["Bytes"] = context.base64Encoder(input.Bytes);
  }
  if (input.S3Object !== undefined) {
    bodyParams["S3Object"] = serializeAws_json1_1S3Object(
      input.S3Object,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DocumentLocation = (
  input: DocumentLocation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.S3Object !== undefined) {
    bodyParams["S3Object"] = serializeAws_json1_1S3Object(
      input.S3Object,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FeatureTypes = (
  input: Array<FeatureType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetDocumentAnalysisRequest = (
  input: GetDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDocumentTextDetectionRequest = (
  input: GetDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1HumanLoopConfig = (
  input: HumanLoopConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataAttributes !== undefined) {
    bodyParams["DataAttributes"] = serializeAws_json1_1HumanLoopDataAttributes(
      input.DataAttributes,
      context
    );
  }
  if (input.FlowDefinitionArn !== undefined) {
    bodyParams["FlowDefinitionArn"] = input.FlowDefinitionArn;
  }
  if (input.HumanLoopName !== undefined) {
    bodyParams["HumanLoopName"] = input.HumanLoopName;
  }
  return bodyParams;
};

const serializeAws_json1_1HumanLoopDataAttributes = (
  input: HumanLoopDataAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContentClassifiers !== undefined) {
    bodyParams["ContentClassifiers"] = serializeAws_json1_1ContentClassifiers(
      input.ContentClassifiers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1NotificationChannel = (
  input: NotificationChannel,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.SNSTopicArn !== undefined) {
    bodyParams["SNSTopicArn"] = input.SNSTopicArn;
  }
  return bodyParams;
};

const serializeAws_json1_1S3Object = (
  input: S3Object,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  return bodyParams;
};

const serializeAws_json1_1StartDocumentAnalysisRequest = (
  input: StartDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DocumentLocation !== undefined) {
    bodyParams["DocumentLocation"] = serializeAws_json1_1DocumentLocation(
      input.DocumentLocation,
      context
    );
  }
  if (input.FeatureTypes !== undefined) {
    bodyParams["FeatureTypes"] = serializeAws_json1_1FeatureTypes(
      input.FeatureTypes,
      context
    );
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StartDocumentTextDetectionRequest = (
  input: StartDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DocumentLocation !== undefined) {
    bodyParams["DocumentLocation"] = serializeAws_json1_1DocumentLocation(
      input.DocumentLocation,
      context
    );
  }
  if (input.JobTag !== undefined) {
    bodyParams["JobTag"] = input.JobTag;
  }
  if (input.NotificationChannel !== undefined) {
    bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(
      input.NotificationChannel,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AnalyzeDocumentResponse = (
  output: any,
  context: __SerdeContext
): AnalyzeDocumentResponse => {
  let contents: any = {
    __type: "AnalyzeDocumentResponse",
    AnalyzeDocumentModelVersion: undefined,
    Blocks: undefined,
    DocumentMetadata: undefined,
    HumanLoopActivationOutput: undefined
  };
  if (output.AnalyzeDocumentModelVersion !== undefined) {
    contents.AnalyzeDocumentModelVersion = output.AnalyzeDocumentModelVersion;
  }
  if (output.Blocks !== undefined) {
    contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
  }
  if (output.DocumentMetadata !== undefined) {
    contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(
      output.DocumentMetadata,
      context
    );
  }
  if (output.HumanLoopActivationOutput !== undefined) {
    contents.HumanLoopActivationOutput = deserializeAws_json1_1HumanLoopActivationOutput(
      output.HumanLoopActivationOutput,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BadDocumentException = (
  output: any,
  context: __SerdeContext
): BadDocumentException => {
  let contents: any = {
    __type: "BadDocumentException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Block = (
  output: any,
  context: __SerdeContext
): Block => {
  let contents: any = {
    __type: "Block",
    BlockType: undefined,
    ColumnIndex: undefined,
    ColumnSpan: undefined,
    Confidence: undefined,
    EntityTypes: undefined,
    Geometry: undefined,
    Id: undefined,
    Page: undefined,
    Relationships: undefined,
    RowIndex: undefined,
    RowSpan: undefined,
    SelectionStatus: undefined,
    Text: undefined
  };
  if (output.BlockType !== undefined) {
    contents.BlockType = output.BlockType;
  }
  if (output.ColumnIndex !== undefined) {
    contents.ColumnIndex = output.ColumnIndex;
  }
  if (output.ColumnSpan !== undefined) {
    contents.ColumnSpan = output.ColumnSpan;
  }
  if (output.Confidence !== undefined) {
    contents.Confidence = output.Confidence;
  }
  if (output.EntityTypes !== undefined) {
    contents.EntityTypes = deserializeAws_json1_1EntityTypes(
      output.EntityTypes,
      context
    );
  }
  if (output.Geometry !== undefined) {
    contents.Geometry = deserializeAws_json1_1Geometry(
      output.Geometry,
      context
    );
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Page !== undefined) {
    contents.Page = output.Page;
  }
  if (output.Relationships !== undefined) {
    contents.Relationships = deserializeAws_json1_1RelationshipList(
      output.Relationships,
      context
    );
  }
  if (output.RowIndex !== undefined) {
    contents.RowIndex = output.RowIndex;
  }
  if (output.RowSpan !== undefined) {
    contents.RowSpan = output.RowSpan;
  }
  if (output.SelectionStatus !== undefined) {
    contents.SelectionStatus = output.SelectionStatus;
  }
  if (output.Text !== undefined) {
    contents.Text = output.Text;
  }
  return contents;
};

const deserializeAws_json1_1BlockList = (
  output: any,
  context: __SerdeContext
): Array<Block> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Block(entry, context)
  );
};

const deserializeAws_json1_1BoundingBox = (
  output: any,
  context: __SerdeContext
): BoundingBox => {
  let contents: any = {
    __type: "BoundingBox",
    Height: undefined,
    Left: undefined,
    Top: undefined,
    Width: undefined
  };
  if (output.Height !== undefined) {
    contents.Height = output.Height;
  }
  if (output.Left !== undefined) {
    contents.Left = output.Left;
  }
  if (output.Top !== undefined) {
    contents.Top = output.Top;
  }
  if (output.Width !== undefined) {
    contents.Width = output.Width;
  }
  return contents;
};

const deserializeAws_json1_1DetectDocumentTextResponse = (
  output: any,
  context: __SerdeContext
): DetectDocumentTextResponse => {
  let contents: any = {
    __type: "DetectDocumentTextResponse",
    Blocks: undefined,
    DetectDocumentTextModelVersion: undefined,
    DocumentMetadata: undefined
  };
  if (output.Blocks !== undefined) {
    contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
  }
  if (output.DetectDocumentTextModelVersion !== undefined) {
    contents.DetectDocumentTextModelVersion =
      output.DetectDocumentTextModelVersion;
  }
  if (output.DocumentMetadata !== undefined) {
    contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(
      output.DocumentMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DocumentMetadata = (
  output: any,
  context: __SerdeContext
): DocumentMetadata => {
  let contents: any = {
    __type: "DocumentMetadata",
    Pages: undefined
  };
  if (output.Pages !== undefined) {
    contents.Pages = output.Pages;
  }
  return contents;
};

const deserializeAws_json1_1DocumentTooLargeException = (
  output: any,
  context: __SerdeContext
): DocumentTooLargeException => {
  let contents: any = {
    __type: "DocumentTooLargeException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EntityTypes = (
  output: any,
  context: __SerdeContext
): Array<EntityType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Geometry = (
  output: any,
  context: __SerdeContext
): Geometry => {
  let contents: any = {
    __type: "Geometry",
    BoundingBox: undefined,
    Polygon: undefined
  };
  if (output.BoundingBox !== undefined) {
    contents.BoundingBox = deserializeAws_json1_1BoundingBox(
      output.BoundingBox,
      context
    );
  }
  if (output.Polygon !== undefined) {
    contents.Polygon = deserializeAws_json1_1Polygon(output.Polygon, context);
  }
  return contents;
};

const deserializeAws_json1_1GetDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentAnalysisResponse => {
  let contents: any = {
    __type: "GetDocumentAnalysisResponse",
    AnalyzeDocumentModelVersion: undefined,
    Blocks: undefined,
    DocumentMetadata: undefined,
    JobStatus: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    Warnings: undefined
  };
  if (output.AnalyzeDocumentModelVersion !== undefined) {
    contents.AnalyzeDocumentModelVersion = output.AnalyzeDocumentModelVersion;
  }
  if (output.Blocks !== undefined) {
    contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
  }
  if (output.DocumentMetadata !== undefined) {
    contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(
      output.DocumentMetadata,
      context
    );
  }
  if (output.JobStatus !== undefined) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Warnings !== undefined) {
    contents.Warnings = deserializeAws_json1_1Warnings(
      output.Warnings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentTextDetectionResponse => {
  let contents: any = {
    __type: "GetDocumentTextDetectionResponse",
    Blocks: undefined,
    DetectDocumentTextModelVersion: undefined,
    DocumentMetadata: undefined,
    JobStatus: undefined,
    NextToken: undefined,
    StatusMessage: undefined,
    Warnings: undefined
  };
  if (output.Blocks !== undefined) {
    contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
  }
  if (output.DetectDocumentTextModelVersion !== undefined) {
    contents.DetectDocumentTextModelVersion =
      output.DetectDocumentTextModelVersion;
  }
  if (output.DocumentMetadata !== undefined) {
    contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(
      output.DocumentMetadata,
      context
    );
  }
  if (output.JobStatus !== undefined) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.StatusMessage !== undefined) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Warnings !== undefined) {
    contents.Warnings = deserializeAws_json1_1Warnings(
      output.Warnings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  let contents: any = {
    __type: "HumanLoopActivationOutput",
    HumanLoopActivationConditionsEvaluationResults: undefined,
    HumanLoopActivationReasons: undefined,
    HumanLoopArn: undefined
  };
  if (output.HumanLoopActivationConditionsEvaluationResults !== undefined) {
    contents.HumanLoopActivationConditionsEvaluationResults =
      output.HumanLoopActivationConditionsEvaluationResults;
  }
  if (output.HumanLoopActivationReasons !== undefined) {
    contents.HumanLoopActivationReasons = deserializeAws_json1_1HumanLoopActivationReasons(
      output.HumanLoopActivationReasons,
      context
    );
  }
  if (output.HumanLoopArn !== undefined) {
    contents.HumanLoopArn = output.HumanLoopArn;
  }
  return contents;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  let contents: any = {
    __type: "HumanLoopQuotaExceededException",
    Code: undefined,
    Message: undefined,
    QuotaCode: undefined,
    ResourceType: undefined,
    ServiceCode: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.QuotaCode !== undefined) {
    contents.QuotaCode = output.QuotaCode;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.ServiceCode !== undefined) {
    contents.ServiceCode = output.ServiceCode;
  }
  return contents;
};

const deserializeAws_json1_1IdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  let contents: any = {
    __type: "IdempotentParameterMismatchException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidJobIdException = (
  output: any,
  context: __SerdeContext
): InvalidJobIdException => {
  let contents: any = {
    __type: "InvalidJobIdException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  let contents: any = {
    __type: "InvalidS3ObjectException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Pages = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Point = (
  output: any,
  context: __SerdeContext
): Point => {
  let contents: any = {
    __type: "Point",
    X: undefined,
    Y: undefined
  };
  if (output.X !== undefined) {
    contents.X = output.X;
  }
  if (output.Y !== undefined) {
    contents.Y = output.Y;
  }
  return contents;
};

const deserializeAws_json1_1Polygon = (
  output: any,
  context: __SerdeContext
): Array<Point> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Point(entry, context)
  );
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  let contents: any = {
    __type: "ProvisionedThroughputExceededException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Relationship = (
  output: any,
  context: __SerdeContext
): Relationship => {
  let contents: any = {
    __type: "Relationship",
    Ids: undefined,
    Type: undefined
  };
  if (output.Ids !== undefined) {
    contents.Ids = deserializeAws_json1_1IdList(output.Ids, context);
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1RelationshipList = (
  output: any,
  context: __SerdeContext
): Array<Relationship> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Relationship(entry, context)
  );
};

const deserializeAws_json1_1StartDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentAnalysisResponse => {
  let contents: any = {
    __type: "StartDocumentAnalysisResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentTextDetectionResponse => {
  let contents: any = {
    __type: "StartDocumentTextDetectionResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedDocumentException = (
  output: any,
  context: __SerdeContext
): UnsupportedDocumentException => {
  let contents: any = {
    __type: "UnsupportedDocumentException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Warning = (
  output: any,
  context: __SerdeContext
): Warning => {
  let contents: any = {
    __type: "Warning",
    ErrorCode: undefined,
    Pages: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Pages !== undefined) {
    contents.Pages = deserializeAws_json1_1Pages(output.Pages, context);
  }
  return contents;
};

const deserializeAws_json1_1Warnings = (
  output: any,
  context: __SerdeContext
): Array<Warning> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Warning(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
