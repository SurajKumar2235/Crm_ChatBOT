
# Meeting Cancel API

#### Purpose

To cancel a meeting and to send an email regarding the meeting cancellation to the participants.

#### Endpoints

[POST /Events/{event\_id}/actions/cancel](https://www.zoho.com/crm/developer/docs/api/v7/meeting-cancel.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Events/{event\_id}/actions/cancel

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.Modules.ALL

(or)

ZohoCRM.Modules.Events.{operation\_type}

#### Possible operation types

ALL - Full access to Meetings module

UPDATE - Update Meetings

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Events/4876876000001563018/actions/cancel"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- Only if attendees have already been invited to the meeting can it be cancelled. After the end time, a meeting cannot be cancelled.
- You can get the cancellation status of a meeting from the **$event\_cancelled** key in the GET Meetings API response. For more information, refer to the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) documentation.

#### Input JSON Keys

- send\_cancelling\_mailBoolean, mandatory



Mention whether to send meeting cancellation notification mail to participants or not.


#### Sample Input

``` json
Copied{
    "data": [\
        {\
           "send_cancelling_mail"  : false\
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



The id given seems to be invalid

**Resolution:** Specify a valid Meeting ID.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified the **send\_cancelling\_mail** key in the input body. Specify the mandatory key.

- NOT\_ALLOWEDHTTP 400



The event is already cancelled

**Resolution:** You are trying to cancel a meeting that is already cancelled. Specify a valid Meeting ID.

- NOT\_ALLOWEDHTTP 400



You cannot cancel the event without inviting participants

**Resolution:** A meeting without participants cannot be cancelled. Invite participants to the meeting and cancel the meeting, or specify a Meeting ID with participants.

- NOT\_ALLOWEDHTTP 400



You cannot cancel the meeting after the meeting end time

**Resolution:** A meeting cannot be cancelled after the meeting end time. Specify a valid Meeting ID.

- CANNOT\_PERFORM\_ACTIONHTTP 400



no permission to perform an action on this record

**Resolution:** The user does not have permission to access the record. Contact your system administrator.

- NO\_PERMISSIONHTTP 400



permission denied

**Resolution:** The user does not have permission to cancel the meeting. Contact your system administrator.

- DAILY\_LIMIT\_EXCEEDEDHTTP 400



Daily limit reached

**Resolution:** The user has reached the daily mail limit. No more emails can be sent. You can choose not to send the cancellation email, or cancel the meeting the next day.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000001563018"\
            },\
            "message": "The event is successfully cancelled",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/meeting-cancel.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)