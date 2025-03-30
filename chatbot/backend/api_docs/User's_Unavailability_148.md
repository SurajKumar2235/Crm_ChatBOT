
# Update User's Unavailability

#### Purpose

To update the details of your unavailability during a particular time period.

#### Endpoints

[PUT /settings/users\_unavailability](https://www.zoho.com/crm/developer/docs/api/v7/update-user-unavailability.html)

[PUT /settings/users\_unavailability/{id}](https://www.zoho.com/crm/developer/docs/api/v7/update-user-unavailability.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/users\_unavailability (or)

{api-domain}/crm/{version}/settings/users\_unavailability/{id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.users\_unavailability.ALL

(or)

scope=ZohoCRM.settings.users\_unavailability.UPDATE

(or)

scope=ZohoCRM.settings.users\_unavailability.WRITE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/users_unavailability"
-X PUT
-d "@update.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- commentsstring, optional



The comment you want other users to see while you are unavailable.

- fromstring, mandatory if you want to update this data



The date and time in the ISO8601 format that you will be unavailable from.

- tostring, mandatory if you want to update this data



The date and time in the ISO8601 format that you will be unavailable up to.

- idstring, mandatory



The unique ID of the record received in the response when you marked yourself unavailable. This ID is available in the response of the [Mark a User Unavailable API](https://www.zoho.com/crm/developer/docs/api/v7/post-user-unavailability.html).


**Note**

- You can update either or both start and end time.
- "id" is a mandatory key in the input if you do not specify in the request URL.

#### Sample Input

``` json
Copied{
    "users_unavailability": [\
        {\
            "comments": "Unavailable - Updated the 'from' time",\
            "from": "2021-02-18T15:00:00+05:30",\
            "id": "554023000002221001"\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified the ID in the input or the request URL.

**Resolution:** Ensure that you have included the mandatory key "id" and its value in the input.

- INVALID\_DATAHTTP 400



You have specified an incorrect ID, or you have specified an incorrect time in either the "to" or "from" fields.

**Resolution:** Specify the correct ID and the right time in the ISO8601 format. Ensure that the unavailability time period starts before the time it ends.


#### Sample Response

``` json
Copied{
    "users_unavailability": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "554023000002221001"\
            },\
            "message": "Unavailability updated successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-user-unavailability.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)