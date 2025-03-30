
# Get Unsubscribe Link Associations

#### Purpose

To obtain information regarding the associations of unsubscribe links configured in your account.

#### Endpoints

[GET /settings/unsubscribe\_link/actions/associations](https://www.zoho.com/crm/developer/docs/api/v7/unsubscribe-link-associations.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}settings/unsubscribe\_link/actions/associations

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.unsubscribe.ALL

(or)

scope = ZohoCRM.settings.unsubscribe.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/unsubscribe_link/actions/associations"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- idstring



The unique id of the unsubscribe link.

- associated\_placesJSON array



Contains details of where the unsubscribe link is associated.



  - resourceJSON object



    Contains the name and unique id of the resource, where the unsubscribe link is associated. For instance, the name and id of the email template where the unsubscribe link is used.

  - detailsJSON object



    Contains the details of the module where the unsubscribe link is associated.

  - typestring



    Represents the type of association for the unsubscribe link. Possible values are **email\_templates** and **email\_footer**.

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
    "associations": [\
        {\
            "id": "2309216000000582076",\
            "associated_places": [\
                {\
                    "resource": {\
                        "name": "Product Update",\
                        "id": "2309216000000587001"\
                    },\
                    "details": {\
                        "module": {\
                            "api_name": "Leads",\
                            "id": "2309216000000000125"\
                        }\
                    },\
                    "type": "email_templates"\
                }\
            ]\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/unsubscribe-link-associations.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)