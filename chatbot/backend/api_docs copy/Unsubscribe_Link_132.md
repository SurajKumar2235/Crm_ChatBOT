
# Update Unsubscribe Link

#### Purpose

To update an unsubscribe link.

#### Endpoints

[PUT /settings/unsubscribe\_links/{unsubscribe\_link\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-unsubscribe-link.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/unsubscribe\_links/{unsubscribe\_link\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.unsubscribe.ALL

(or)

scope = ZohoCRM.settings.unsubscribe.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/unsubscribe_links/2309216000000582123"
-X PUT
-d "newlink.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Input JSON Keys

- namestring, mandatory



The unique name for the unsubscribe link.

- page\_typestring, mandatory



Specify whether the unsubscribe link should be hosted in the standard page designed by Zoho CRM, or a custom webpage. The possible values are **standard** and **custom**.

- custom\_location\_urlstring, mandatory if the value of **page\_type** is **custom**



Specify the webpage URL where you want to host the unsubscribe link. Skip this field if you wish to use the standard page for hosting your unsubscribe link.

- standard\_page\_messagestring, optional



Specify the message to be displayed in the standard unsubscribe page.  The message can either be in rich text (html) or plain text format.

- submission\_action\_typestring, mandatory



Specify the action to be performed when the user clicks the unsubscribe button. You can configure to display a message, or to redirect to another URL upon unsubscribe. The possible values are **display\_message** and **redirect**.

- submission\_redirect\_urlstring, mandatory if the value of **submission\_action\_type** is **redirect**



Specify the web page URL to which the user will be redirected after clicking on the unsubscribe link.

- submission\_messagestring, mandatory if the value of **submission\_action\_type** is **display\_message**



The message to be displayed once the user clicks the unsubscribe button. You can specify the message either in rich text (html) or plain text format.


#### Sample Input

``` json
Copied{
  "unsubscribe_links": [\
    {\
      "name": "TestY",\
      "page_type": "custom",\
      "custom_location_url": "https://custompage.com",\
      "submission_action_type": "display_message",\
      "submission_message": "<p style='max-width:100%;line-height:1.25;overflow-wrap:break-word;text-align:left'><span editable='false' data-image='' style='white-space:break-spaces;color:rgb(51, 51, 51);white-space-collapse:break-spaces;text-wrap:wrap;background:url(https://static.zohoCDN.com/crm/CRMClient/images/successalert_f194f7d_.svg) 0px 0px no-repeat;width:22px;height:22px;display:inline-block;vertical-align:middle;margin-right:7px;margin-inline-end:7px'> </span><span style='font-size:24px;font-weight:bold;vertical-align:middle;display:inline'>Unsubscribed Successfully</span><span> </span></p><p><span> </span></p><p><span style='display:inline'>You have successfully unsubscribed. Thank you for your time!</span></p>"\
    }\
  ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required OAUTH SCOPE. Create a new client with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



You have specified an invalid value for the URL fields.

**Resolution:** Specify a valid URL.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified one or more of the mandatory keys in the input body. Specify all the mandatory keys. Refer to the **Input JSON keys** sections to know more.

- DUPLICATE\_DATAHTTP 400



Unsubscribe Link name already exists

**Resolution:** Specify another unique name for the unsubscribe link.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Required field not found

**Resolution:** You have not specified one of the dependent fields. Please specify all the dependent fields. Refer to the input JSON keys section above to know about the dependent fields.

- INVALID\_DATAHTTP 400



The given Unsubscribe Link id is not part of Org

**Resolution:** You have specified an invalid unsubscribe link ID. Please specify a valid link ID.


#### Sample Response

``` json
Copied{
    "unsubscribe_links": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2309216000000582123"\
            },\
            "message": "Unsubscribe Link updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-unsubscribe-link.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)