
# Invite a User to a Portal

#### Purpose

To invite users to a portal in bulk. This API schedules a job. Use the [Get Status](https://www.zoho.com/crm/developer/docs/api/v7/get-portal-invite-users-job-status.html) API to get the status of the scheduled job.

#### Endpoints

[POST /{personality\_module}/actions/portal\_invite](https://www.zoho.com/crm/developer/docs/api/v7/portal-bulk-invite-users.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{personality\_module}/actions/portal\_invite

Where, _personality\_module_ is the API name of the module for which the portal was created

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/actions/portal_invite"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

##### Input JSON

When you invite users to a portal in bulk, a job will be scheduled in the background. Use the [Get Status](https://www.zoho.com/crm/developer/docs/api/v7/get-portal-invite-users-job-status.html) API to get the status of the scheduled job.

- dataJSON array, mandatory



Contains the following details:



- idstring, mandatory



The record ID of the user you want to invite to the portal.

- user\_type\_idstring, mandatory



The ID of the user type you want to assign this user with. Use the [Get User Types API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-types.html) for this ID.

- typestring, mandatory



Represents whether the user is invited the first time or is re-invited. The possible values are **invite** and **reinvite**.

- languagestring, optional



The language code of the user you want to invite to the portal. The default value is **en\_US**. The supported values are "en\_US", "en\_GB", "bg\_BG", "zh\_CN", "zh\_TW", "hr\_HR", "ar\_EG", "in\_ID", "cs\_CZ", "da\_DK", "nl\_NL", "fr\_FR", "de\_DE", "hu\_HU", "hi\_IN", "it\_IT", "ja\_JP", "pl\_PL","pt\_BR", "pt\_PT", "ru\_RU", "es\_ES", "sv\_SE", "th\_TH", "tr\_TR", "vi\_VN", "ko\_KR", and "iw\_IL".


#### Sample Input

``` json
Copied{
 "portal_invite": [\
   {\
     "data": [\
       {\
         "id": "5020928000002121016",\
         "user_type_id": "5020928000000523003",\
         "type": "invite",\
         "language": "en_US"\
       }\
     ]\
   }\
 ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified one or more mandatory keys in the input.

**Resolution:** Refer to the "details" key in the error response to know what is missing and include it in the request.

- INVALID\_DATAHTTP 400



The input has invalid data.

**Resolution:** Refer to the "details" key in the error response to know the api\_path and json\_path of the incorrect section in the input.

- INVALID\_REQUEST\_METHODHTTP 400



You have specified an incorrect HTTP request method.

**Resolution**: You must use the HTTP request method POST to use this API.

- NO\_PERMISSIONHTTP 403



You do not have permission to invite users to the portal.

**Resolution**: Contact your administrator.


#### Sample Response

``` json
Copied{
  "portal_invite": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "record_id": "3652397000000388085"\
      },\
      "message": "An Invite has been sent to the personality.",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/portal-bulk-invite-users.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)