
# Delete Unsubscribe Link

#### Purpose

To delete an unsubscribe link.

#### Endpoints

[DELETE /settings/unsubscribe\_links/{unsubscribe\_link\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-unsubscribe-link.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/unsubscribe\_links/{unsubscribe\_link\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.unsubscribe.ALL

(or)

scope = ZohoCRM.settings.unsubscribe.DELETE

**Note**

You cannot delete the **Default** unsubscribe link.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/unsubscribe_links/2309216000000582097"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

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



The given Unsubscribe Link id is not part of Org

**Resolution:** Specify a valid unsubscribe link ID.

- NOT\_ALLOWEDHTTP 400



The given Unsubscribe Link id is Default

**Resolution:** You canont delete the **Default** unsubscribe link.


#### Sample Response

``` json
Copied{
    "unsubscribe_links": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2309216000000582097"\
            },\
            "message": "Unsubscribe Link deleted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-unsubscribe-link.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)