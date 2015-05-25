﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace GameServices
{
    public interface IFinance
    {
        MR AddBank(DBModel.wgs010 entity);
        MR UpdateBank(List<DBModel.wgs010> entityList);
        List<DBModel.wgs010> GetBankList();
        List<DBModel.wgs010> GetBankListByCache();
        void ClearBankListCache();
        MR AddCT(DBModel.wgs009 entity);
        MR UpdateCT(DBModel.wgs009 entity);
        List<DBModel.wgs009> GetCTList();
        List<DBModel.wgs009> GetCTListByCache();
        void ClearCTListCache();
        DBModel.wgs009 GetCT(int key);
        MR AddCharege(DBModel.wgs019 entity);
        List<DBModel.wgs019> GetChargeList(int bankType, int userID, string userName, long key, string ckey, int amtT, decimal amtTV, int amtTT, decimal amtTTV, int amtTHT, decimal amtTHTV, int status, DateTime? dts, DateTime? dte, int pageSize, int pageIndex, out int recordCout);
        int CheckCCashCount(int status, int userID, string account, decimal amount, DateTime? dts, DateTime? dte);
        List<DBModel.SysSumDRInfo> GetLevelSumReport(int userID, int type, DateTime dts, DateTime dte);
        int CheckWCashCount(int status, int userID, string account, decimal amount, DateTime? dts, DateTime? dte);
        DBModel.wgs019 GetCCash(long key);
        DBModel.wgs019 GetCCash(string chargeCode);
        MR UpdateCCash(DBModel.wgs019 entity);
        MR UpdateCCashNY(long key, int nyKey);
        MR AddDataChange(int userID,int type, object id, string comment);
        DBModel.wgs021 GetDataChange(long key);
        MR SendPointToUser(int userID, decimal point);
        MR SendFrozenSumToUser(int userID, decimal frozenSum, string remarks);
        MR CheckDayChargeCount(int myUserID);
        List<DBModel.wgs021> GetDataChangeList(int userID, int type, long key, string account, DateTime? dts, DateTime? dte, int pageSize, int pageIndex, out int recordCout);
        MR AddWithdrawType(DBModel.wgs024 entity);
        MR UpdateWithdrawType(DBModel.wgs024 entity);
        DBModel.wgs024 GetWithdrawType(int key);
        List<DBModel.wgs042> GetDRExt(int admin, int myUserID, DateTime? dts, DateTime? dte, int st, string acct, int acctID, string parentAcct, int parentID, int omt, decimal omv, int cmt, decimal cmv, int pmt, decimal pmv);
        List<DBModel.wgs024> GetWithdrawTypeList();
        List<DBModel.wgs024> GetWithdrawTypeListByCache();
        decimal? ChargeSum(int userID, string account, int status, int type, DateTime? dts, DateTime? dte);
        List<DBModel.wgs051> GetStockList(int userID, DateTime? dts, DateTime? dte, int pageIndex, int pageSize, out int recordCount);
        void ClearWithdrawTypeListCache();
        MR AddWCashBank(DBModel.wgs023 entity);
        List<DBModel.wgs042> GetDRReport(int myUserID, int type, DateTime? dts, DateTime? dte);
        MR UpdateWCashBank(DBModel.wgs023 entity);
        List<DBModel.wgs023> GetWCashBankList(int userID);
        MR DeleteWCashBank(int userID);
        int GETWCashBankCount(int userID, int bankID, string name);
        int GETWCashBankCount(int userID, int bankID);
        int GETWCashBankCount(string cardNumber);
        DBModel.wgs042 GetDayReport(int userID, DateTime? dt);
        List<DBModel.wgs042> GetDayReport(int myUserID, string account, int userType, DateTime? dts, DateTime? dte);
        List<DBModel.wgs023> GetWCashBankProContent(List<DBModel.wgs023> oriList);
        MR AddWCData(int userID, int wcType, int moneyType, decimal amount, string ip, int isfh);
        List<DBModel.wgs020> GetWCDataList(int type, int userID, string userAccount, long key, int amtT, decimal amtTV, int amtTH, decimal amtTHV, int status, DateTime? dts, DateTime? dte, int pageSize, int pageIndex, out int recordCount);
        DBModel.wgs020 GetWCData(int key);
        List<DBModel.ChargeReport> GetChargeReport(int status, DateTime? dt, DateTime? dte);
        List<DBModel.WithDrawReport> GetWithDrawReport(int status, DateTime? dt, DateTime? dte);
        List<DBModel.GameReport> GetGameReport(DateTime? dt, DateTime? dte);
        MR TransferMoney(int myUserID, int toUserID, decimal amount, string ip, long port);
        List<DBModel.wgs043> GetTransferList(long key, int myUserID, string myUserName, int toUserID, string toUserName, int type, int amtT, decimal amtV, DateTime? dts, DateTime? dte, int pageIndex, int pageSize, out int recordCount);
        MR SetTransferDone(long key, int type, int mu001, string mu002, string comment);
        MR SetWCData(int key, int status, decimal money, decimal fee, int mgID, int agID, string comment, string mySendBank,string MySendAccount, string MySendOrderID);
        MR CancelCharege(List<long> ids, DBModel.wgs016 controlUser);
        MR GetExtChargeCode(string code);
        MR GetExtChargeByAccount(string account);
        MR SetExtChargeByAccount(int userid, string account, decimal money, string type, string dkkh, string dkrm, string sjm, DateTime sj, string O_id);
    }
}