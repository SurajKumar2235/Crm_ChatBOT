
# Get Unsubscribe Links

#### Purpose

To fetch the details of [unsubscribe links](https://help.zoho.com/portal/en/kb/crm/marketing-automation-tools/web-forms/articles/set-unsubscribe-link) set up in your CRM account.

#### Endpoints

[GET /settings/unsubscribe\_links](https://www.zoho.com/crm/developer/docs/api/v7/get-unsubscribe-links.html)

[GET /settings/unsubscribe\_links/{link\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-unsubscribe-links.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/unsubscribe\_links

**To fetch a specific unsubscribe link:**

{api-domain}/crm/{version}/settings/unsubscribe\_links/{link\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.settings.unsubscribe\_links.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/unsubscribe_links"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- namestring



The name of the unsubscribe link.

- idstring



The unique id of the unsubscribe link.

- created\_timedatetime



The date and time at which the unsubscribe link was created.

- created\_byJSON object



Details of the user who created the unsubscribe link.

- modified\_timedatetime



The date and time at which the unsubscribe link was last modified.

- modified\_byJSON object



Details of the user who last modified the unsubscribe link details.

- page\_typestring



Represents whether the unsubscribe is hosted in a standard page designed by Zoho CRM, or a custom webpage. The possible values are **standard** and **custom**.

- custom\_location\_urlstring



Represents the custom webpage, where the unsubscribe link is hosted. The value will be _null_ if the link is hosted in the standard Zoho desgined webpage.

- standard\_page\_messagestring



The message that will be displayed on the standard unsubscribe page, along with the unsubscribe link.

- submission\_action\_type string



Represents the action to be performed when the user clicks the unsubscribe button. Depending on how the link is configured, the value could either be **display\_message** or **redirect**.

- submission\_redirect\_urlstring



Represents the web page's URL to which the user will be redirected after clicking on the unsubscribe link.

- submission\_messagestring



The message that will be displayed once the user clicks the unsubscribe button.


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


#### Sample Response

``` json
Copied{
    "unsubscribe_links": [\
        {\
            "created_time": "2023-12-12T13:08:43+05:30",\
            "submission_message": "display message",\
            "modified_time": "2023-12-12T13:08:43+05:30",\
            "submission_redirect_url": null,\
            "page_type": "custom",\
            "custom_location_url": "https://custompage.com/unsubscribe",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "2309216000000476001"\
            },\
            "name": "Default",\
            "id": "2309216000000582076",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "2309216000000476001"\
            },\
            "standard_page_message": null,\
            "submission_action_type": "display_message"\
        }\
}\
```\
\
© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.\
\
[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-unsubscribe-links.html#top)\
\
- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)\
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)\
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)