import { DateTime } from 'luxon';

export type UrlRecordPayload = Readonly<{
    redirectUrl: string;
}>;

export type UrlRecord = UrlRecordPayload & Readonly<{
    url: string,
     createdAt: string,
      id: string,
      qrCodeUri: string,
    }>;
