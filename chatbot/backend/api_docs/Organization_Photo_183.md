
# Get Organization Photo

#### Purpose

To get the photo or logo of your organization.

#### Endpoints

[GET /org/photo](https://www.zoho.com/crm/developer/docs/api/v7/get-org-img.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/org/photo

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.org.{operation\_type}

#### Possible operation types

READ - Get organization photo or logo.

ALL - Full access to Organization data.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/org/photo"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/org/photo"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;

```

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.org.ALL** / **ZohoCRM.org.READ scope**.

Create a new client with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** User does not have sufficient privilege to read organization photo.

Contact your administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-org-img.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)