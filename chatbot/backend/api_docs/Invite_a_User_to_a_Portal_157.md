The invitation you sent failed as a portal user exists with the same email ID.

**Resolution:** Invite the right user to the portal.

- INVALID\_DATAHTTP 400



Reasons:



- The language code is invalid.
- The invitation you sent failed as the user is not a client or a customer.
- The user\_type\_id is invalid.
- The personality module's record ID is invalid.

**Resolutions**:

- Refer to the key "language" in the "Input JSON" section for the allowed language codes.
- Invite only clients or customers to this user type, not users from your domain.
- Specify the right user\_type\_id.
- Specify the right record ID of the personality module's record. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get this ID.

- NOT\_REVIEWEDHTTP 400



You cannot send portal invitation since the record is under the review process.

**Resolution**: Send the invitation either to an approved record or wait until this record completes the review process.

- NOT\_APPROVEDHTTP 400



The user record you are trying to invite is not approved, yet.

**Resolution**: Contact your administrator to approve the record.

- CANNOT\_PROCESSHTTP 400



The user you are trying to invite is already invited or the record is under GDPR process.

**Resolution**: Use the value **reinvite** for the "type" parameter to reinvite the user.

- LICENSE\_LIMIT\_EXCEEDEDHTTP 400



You have exceeded the portal user license limit.

**Resolution**: Contact support@zohocrm.com to purchase more user licenses.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NO\_PERMISSIONHTTP 403



You do not have permission to the module.

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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/invite-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)