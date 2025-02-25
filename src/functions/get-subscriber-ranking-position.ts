import { redis } from '../redis/client'

interface GetSubscriberRankingPositionParamParams {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParamParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}
